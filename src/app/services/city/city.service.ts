import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { country } from '../../models/Parameters.model';
import { BehaviorSubject } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

const v1_url = environment.V1_url
@Injectable({
  providedIn: 'root'
})
export class CityService {

  public citiesObs: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public selectedCity: number =  null;

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

  getSelectedCityFilter(): string{
   
   return this.selectedCity ?  `&city=${this.selectedCity}` : '';
  }
  
  

  getCities(country:number = 1){
    const url = `${v1_url}/general/cities/?country=${country}`
           this.http.get(url)
                    .pipe(
                      map((resp:any) => this.citiesObs.next(resp.results))
                    ).subscribe();
  }}
