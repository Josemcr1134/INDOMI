import { Component, OnInit } from '@angular/core';

import { TransactionsService } from '../../services/Transactiones/transactions.service';
import { Transactions, getDetails, ReferTransactions } from 'src/app/models/transactions.model';
import { getStatus } from '../../models/transactions.model';
import { DrawBacks } from 'src/app/models/DrawBacks.model';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions: Transactions[] = []
  public transactionsTemp: Transactions[] = []
  public referTransactions: ReferTransactions[] = []
    public referTransactionsTemp: ReferTransactions[] = [] 
    getDetail = getDetails;
  getStatus = getStatus;
  public pageNumber:number = 1
  public totalServicios:number = 0
  public cargando: boolean = true
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.cargando = true

    this.getTransactions()
    this.getReferTransactions()

  }
  getTransactions(){
    this.cargando = true
    this.transactionsService.getTransactions(this.pageNumber) 
            .subscribe( resp => {
              this.transactions = resp
              this.transactionsTemp = resp
              this.cargando = false
              this.totalServicios = resp.length
            })  
  }
  pagination(valor:number){
    this.cargando = true
    this.pageNumber += valor;

    if (this.pageNumber < 1) {
      this.pageNumber = 1
    } else if (this.pageNumber > this.totalServicios){
      this.pageNumber -= valor
    }
    this.getTransactions()
    this.getReferTransactions()
    this.cargando = false
  }
  getReferTransactions(){
        this.cargando = true

    this.transactionsService.getReferTransactions(5, this.pageNumber)
            .subscribe(resp => {
              this.referTransactions = resp
              this.referTransactionsTemp = resp
              this.cargando = false

            })

  }
  searchTransactions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.transactions = this.transactionsTemp
    }
    this.transactionsService.searchTransactions(searchTerm)
                          .subscribe( (resp:any) => {
                                this.transactions = resp 
                          })
  }
  searchReferTransactions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.referTransactions = this.referTransactionsTemp
    }
    this.transactionsService.searchReferTransactions(5, searchTerm)
                          .subscribe( (resp:any) => {
                                this.referTransactions = resp 
                          })
  }
}
