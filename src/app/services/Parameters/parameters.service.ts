import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChargeParameters, Parameters } from 'src/app/models/Parameters.model';
import { map } from 'rxjs/operators';
import { country } from '../../models/Parameters.model';
const base_url = environment.base_url;
const v1_url = environment.V1_url
@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  public parameters: Parameters[] = []
  public countries: country
  constructor(private http:HttpClient) { }
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
    getParameters(){
      const url = `${base_url}/parameters/`
     return this.http.get<ChargeParameters>(url, this.headers)
            .pipe(
              map( resp => resp.results[0] )
            )
    }

    getCountry(){
      const url = `${v1_url}/general/countries/`
      return this.http.get(url, this.headers)
                    .pipe(
                      map( (resp:any) => {
                        let countries = this.countries 
                        countries = resp.results
                        return countries ;
                      })
                    )
    }

    changeParameters( data:Parameters){

      return this.http.put(`${base_url}/parameters/${data.id}/`, data , this.headers)
    }
}
