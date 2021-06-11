import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  chargeTransactions, Transactions } from 'src/app/models/transactions.model';
import { map } from 'rxjs/operators';
import { ChargeDrawBacks, DrawBacks } from 'src/app/models/DrawBacks.model';
import { ReferTransactions } from '../../models/transactions.model';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
public transactions: Transactions[] = []
public referTransactions: ReferTransactions[] = []
public TotalReferTransactions: number
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
  getTransactions( pageNumber: number = 1){
    const url = `${base_url}/transactions/?page=${pageNumber}`;
    return this.http.get(url, this.headers)
          .pipe(
            map((resp: any) => {
                this.transactions = resp.results
              
                  return this.transactions
            })
          )
  } 
  getReferTransactions(detail:number, pageNumber: number = 1){
     const url = `${base_url}/transactions/?detail=${detail}&page=${pageNumber}`
                return this.http.get(url, this.headers)
                      .pipe(
                        map((resp:any) =>{
                          this.referTransactions = resp.results

                         return this.referTransactions
                        })
                      )
  }
  searchReferTransactions(detail:number ,searchTerm:string){
     const url = `${base_url}/transactions/?detail=${detail}&search=${searchTerm}`
                return this.http.get(url, this.headers)
                      .pipe(
                        map((resp:any) =>{
                          this.referTransactions = resp.results

                         return this.referTransactions
                        })
                      )
  }
  searchTransactions(searchTerm: string ){
    const url = `${base_url}/transactions/?search=${searchTerm}`
            return this.http.get<chargeTransactions>(url, this.headers)
              .pipe(
                  map(resp => resp.results
                )
            )
  }
  

}
