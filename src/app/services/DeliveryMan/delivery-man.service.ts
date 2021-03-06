import { Injectable } from '@angular/core';
import { CargarDomi, ChargeDomiData, Domi, DomiData } from 'src/app/models/DeliveryMan.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ChargeDrawBacks, DrawBacks } from 'src/app/models/DrawBacks.model';
const base_url = environment.base_url;
const v1_url = environment.V1_url;
@Injectable({
  providedIn: 'root'
})
export class DeliveryManService {
public domis: Domi[]
public drawbacks: DrawBacks[]
public domiData: DomiData[]
constructor (private http: HttpClient){}
  get token(): string{
    return localStorage.getItem('token');

  }
  get refreshToken(): string{
    return localStorage.getItem('refresh') || '';

  }

   
  get headers() {
    return {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  }
    getDomi(is_active: boolean, is_user: boolean, pageNumber:number = 1 ){
  const url = `${base_url}/users/?is_active=${is_active}&is_user=${is_user}&page=${pageNumber}`;

     return  this.http.get<CargarDomi>(url, this.headers)
                 .pipe(
                   map(resp => {
                      const domis = resp.results.map(
                        domi => new Domi(domi.id, domi.username, domi.first_name,domi.last_name, domi.photo,  domi.total,)
                      )
                      return   {count: resp.count, domis} 
                      
                    })
                 )
                
  }
  getDrawBacks(pageNumber:number = 1){
    const url = `${base_url}/drawbacks/?page=${pageNumber}`
    return this.http.get<ChargeDrawBacks>(url, this.headers)
                .pipe(
                  map(resp => {
                    const drawBacks = resp.results.map(
                      drawback => new DrawBacks(drawback.id, drawback.transaction, drawback.phone, drawback.doc_number, drawback.status, drawback.observation ,drawback.total, drawback.pay_at, drawback.paid_by)
                    )
                    return {count: resp.count, drawBacks}
                  })
                )
  }
  blockDomi(data:Domi ){
    const url = `${base_url}/users/${data.id}/block_unblock_user/`
    return this.http.put(url ,data, this.headers)
  }
  getDomiById(id:number){
      const url = `${base_url}/domi/${id}/`
     return this.http.get<ChargeDomiData>(url, this.headers )
                  .pipe(
                    map( (resp ) =>  resp  )
                  )

 }  
 UpdateDomiById(data , id){
   const url = `${base_url}/domi/${id}/update_domi/`;
        return this.http.put(url, data,  this.headers)
                      
 }
 searchDomi(is_active:boolean, is_user:boolean,searchTerm: string ){
  const url = `${base_url}/users/?is_active=${is_active}&is_user=${is_user}&search=${searchTerm}`
  return this.http.get<CargarDomi>(url, this.headers)
                .pipe(
                  map(resp => resp.results
                    )
                )
}
searchDrawbacks(searchTerm:string){
  const url = `${base_url}/drawbacks/?search=${searchTerm}`

  return this.http.get<ChargeDrawBacks>(url, this.headers)
                    .pipe(
                      map(resp => resp.results
                        )
                    )
}
}
