import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  chargeTransactions, Transactions } from 'src/app/models/transactions.model';
import { map } from 'rxjs/operators';
import { ChargeDrawBacks, DrawBacks } from 'src/app/models/DrawBacks.model';
import { TypeTransactions } from '../../models/transactions.model';
import { city } from '../../models/City.models';
import { CityService } from '../city/city.service';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
public transactions: Transactions[] = []
public referTransactions: TypeTransactions[] = []
public TotalReferTransactions: number
  constructor(private http: HttpClient, private cityService: CityService) { }
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


  getTransactions( pageNumber?: number ){
    const url = `${base_url}/transactions/?page=${pageNumber}${this.cityService.getSelectedCityFilter()}`;
    return this.http.get(url, this.headers)
          .pipe(
            map((resp: any) => {
                this.transactions = resp.results
              
                  return this.transactions
            })
          )
  } 
  getTypeTransactions( pageNumber?: number , detail?:number){
    const url = `${base_url}/transactions/?detail=${detail}&page=${pageNumber}${this.cityService.getSelectedCityFilter()}`;
    return this.http.get(url, this.headers)
          .pipe(
            map((resp: any) => {
                this.transactions = resp.results
              
                  return this.transactions
            })
          )
  } 
 
  getReferTransactions(detail:number, pageNumber: number = 1){
     const url = `${base_url}/transactions/?detail=${detail}&page=${pageNumber}${this.cityService.getSelectedCityFilter()}`
                return this.http.get(url, this.headers)
                      .pipe(
                        map((resp:any) =>{
                          this.referTransactions = resp.results

                         return this.referTransactions
                        })
                      )
  }
  searchTypeTransactions(detail:number ,searchTerm:string){
     const url = `${base_url}/transactions/?detail=${detail}&search=${searchTerm}${this.cityService.getSelectedCityFilter()}`
                return this.http.get(url, this.headers)
                      .pipe(
                        map((resp:any) =>{
                          this.transactions = resp.results

                         return this.transactions
                        })
                      )
  }
  searchTransactions(searchTerm: string ){
    const url = `${base_url}/transactions/?search=${searchTerm}${this.cityService.getSelectedCityFilter()}`
            return this.http.get<chargeTransactions>(url, this.headers)
              .pipe(
                  map(resp => resp.results
                )
            )
  }
  

}
