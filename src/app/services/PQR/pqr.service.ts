import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { chargePQR, PQR, PQRchoice, PQRID } from 'src/app/models/PQR.models';
import { CityService } from '../city/city.service';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class PQRService {
  public pqr: PQR
  constructor(private http: HttpClient, public cityservice: CityService) { }

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
  getPQR(status: number){
    const url =  `${base_url}/pqr/?status=${status}${this.cityservice.getSelectedCityFilter()}`
    console.log(url)

   return  this.http.get( url, this.headers)
    .pipe(
      map(
        (resp:chargePQR) => {
        return this.pqr =  resp.results
        } )
      )
  }
  reviewPQR(data: PQRID){
    const url = `${base_url}/pqr/${data.id}/`

    return this.http.put(url, data, this.headers)
  }
  SeePQR(data: PQR){
    const url = `${base_url}/pqr/${data.id}/`

    return this.http.put(url, data, this.headers)
  }
  deletePQR(data){
    const url =  `${base_url}/pqr/v1/pqr/${data.id}/`
    return this.http.delete(url, this.headers)
  }
}
