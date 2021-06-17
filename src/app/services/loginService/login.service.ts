import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { city, loginForm } from '../../auth/loginInterfaces/login-form.interfaces';
import { environment } from 'src/environments/environment';
import { AdminUser } from '../../models/AdminUser.model';
import { Observable } from 'rxjs';
const base_url = environment.base_url
const v1_url = environment.V1_url

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor( private http:HttpClient, private router: Router,) { }
/*   public cities : city
 */  get token(): string{
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

  login(formData: loginForm){
      return this.http.post(`${base_url}/auth/login/`, formData)
                    .pipe(
                      tap((resp:any) => {
                        console.log(resp)
                         localStorage.setItem('token', resp.token)
                         localStorage.setItem('first_name', resp.first_name)
                         localStorage.setItem('last_name', resp.last_name)
                         localStorage.setItem('id', resp.id)
                         localStorage.setItem('username', resp.username)
                         localStorage.setItem('refresh', resp.refresh)
                         
                    })
                    )
  }
  /* getCity(){
   const url = `${v1_url}/general/cities/?country=1`
    return this.http.get(url, this.headers)
    .pipe(
      map( (resp:any) => {
        let cities = this.cities 
        cities = resp.results
        return cities ;
      })
    )
  } */
}
