import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DrawBacks, ChargeDrawBacks } from 'src/app/models/DrawBacks.model';
import { environment } from 'src/environments/environment';
import { CityService } from '../city/city.service';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DrawbacksService {
  public drawbacks: DrawBacks[]
  constructor (private http: HttpClient, public cityservice: CityService){}
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
  getDrawBacks(pageNumber:number = 1, status: number){
    const url = `${base_url}/drawbacks/?status=${status}&page=${pageNumber}${this.cityservice.getSelectedCityFilter()}`

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
  searchDrawbacks(searchTerm:string, status:number){
    const url = `${base_url}/drawbacks/?status=${status}&search=${searchTerm}${this.cityservice.getSelectedCityFilter()}`
  
    return this.http.get<ChargeDrawBacks>(url, this.headers)
                      .pipe(
                        map(resp => resp.results
                          )
                      )
  }
}
