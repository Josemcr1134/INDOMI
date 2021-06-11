import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ActiveServices } from 'src/app/models/ActiveServices.model';
import { chargeActiveServices } from '../../models/ActiveServices.model';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class ActiveService {
  public activeservices: ActiveServices
  constructor(private http: HttpClient) { }
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

  getActiveServices(pageNumber: number = 1){
    const url = `${base_url}/services/?page=${pageNumber}`
    return this.http.get<chargeActiveServices>(url, this.headers)
          .pipe(
            map(resp=> resp.results)
          )
  }
  searchActiveServices(searchTerm: string){
    const url = `${base_url}/services/?search=${searchTerm}`
    return this.http.get(url, this.headers)
          .pipe(
            map((resp:any) => resp.results
              )
          )
        }
}
