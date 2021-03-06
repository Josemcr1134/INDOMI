import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Reports } from 'src/app/models/Reports.models';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  public reports: Reports
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

  getReport(data){
      const url = `${base_url}/report/report/?timestamp_start=${data.timestamp_start}&timestamp_end=${data.timestamp_end}`

         return this.http.get<Reports>(url, this.headers)
                .pipe(
                  map(
                    (resp:Reports) =>  resp)

                  )
  }
}
