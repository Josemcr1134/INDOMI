import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { chargeUsers, Usuario } from '../../models/UserDash.model';
import { CityService } from '../city/city.service';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usuario: Usuario[];
  constructor(private http: HttpClient,  private cityService: CityService) { }
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
    getUsers(is_active:boolean, is_user:boolean, pageNumber:number = 1){
  const url = `${base_url}/users/?is_active=${is_active}&is_user=${is_user}&page=${pageNumber}${this.cityService.getSelectedCityFilter()}`;
     return  this.http.get(url, this.headers)
                 .pipe(
                   map((resp: any) => {
                      const usuario = resp.results
                      return usuario
                    })
                 )
                
  }
  blockUser(data:Usuario ){
    const url = `${base_url}/users/${data.id}/block_unblock_user/`
    return this.http.put(url ,data, this.headers)
  }
  searchUsers(is_active:boolean, is_user:boolean,SearchTerm: string ){
    const url = `${base_url}/users/?is_active=${is_active}&is_user=${is_user}&search=${SearchTerm}${this.cityService.getSelectedCityFilter()}`
    return this.http.get<chargeUsers>(url, this.headers)
                  .pipe(
                    map(resp => resp.results
                      )
                  )
  }
}
