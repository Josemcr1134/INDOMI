import { Component, OnInit } from '@angular/core';

import { TransactionsService } from '../../services/Transactiones/transactions.service';
import { Transactions, getDetails, TypeTransactions } from 'src/app/models/transactions.model';
import { getStatus } from '../../models/transactions.model';
import { DrawBacks } from 'src/app/models/DrawBacks.model';
import { CityService } from 'src/app/services/city/city.service';
import { city } from 'src/app/models/City.models';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  public transactions: Transactions[] = []
  public transactionsTemp: Transactions[] = []
  public referTransactions: TypeTransactions[] = []
    public referTransactionsTemp: TypeTransactions[] = [] 
    public charges: TypeTransactions[] = []
    public chargesTemps: TypeTransactions [] = []
    public services: TypeTransactions[] = []
    public servicesTemps: TypeTransactions [] = []
    public tarifas: TypeTransactions[] = []
    public tarifaTemps: TypeTransactions [] = []
    public reembolsos: TypeTransactions[] = []
    public reembolsoTemps: TypeTransactions [] = []
    public draw_backs: TypeTransactions[] = []
    public draw_backTemps: TypeTransactions [] = []
    getDetail = getDetails;
  getStatus = getStatus;
  public pageNumber:number = 1
  public totalServicios:number = 0
  public cargando: boolean = true
  public cities: city[]

  constructor(private transactionsService: TransactionsService, public citiyservice:CityService) { }

  ngOnInit(): void {
    this.cargando = true
    this.getTransactions()
    this.getReferTransactions()
    this.getRechargeTransactions()
    this.getServicesTransactions()
    this.getTarifaTransactions()

  }

  
  filter(){
    this.getTransactions();
    this.getReferTransactions();
    this.getRechargeTransactions();
    this.getServicesTransactions();
    this.getTarifaTransactions();
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
    this.getRechargeTransactions()
    this.getRefundTransactions()
    this.getDrawbacksTransactions()
    this.getTarifaTransactions()
    this.getServicesTransactions()
    this.cargando = false
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
  getRechargeTransactions(){
    this.cargando = true

this.transactionsService.getTypeTransactions( this.pageNumber, 1)
        .subscribe(resp => {
          this.charges = resp
          this.chargesTemps = resp
          this.totalServicios = resp.length

          this.cargando = false

        })

}
  getServicesTransactions(){
    this.cargando = true

  this.transactionsService.getTypeTransactions( this.pageNumber, 2)
        .subscribe(resp => {
          this.services = resp
          this.servicesTemps = resp
          this.totalServicios = resp.length

          this.cargando = false

        })

  }
  getTarifaTransactions(){
    this.cargando = true

  this.transactionsService.getTypeTransactions( this.pageNumber, 3)
        .subscribe(resp => {
          this.tarifas = resp
          this.tarifaTemps = resp
          this.totalServicios = resp.length

          this.cargando = false

        })

  }
  getRefundTransactions(){
    this.cargando = true
this.transactionsService.getTypeTransactions(this.pageNumber, 4)
        .subscribe(resp => {
          this.reembolsos = resp
          this.reembolsoTemps = resp
          this.totalServicios = resp.length
          this.cargando = false

        })

}
  getReferTransactions(){
    this.cargando = true
  this.transactionsService.getTypeTransactions(this.pageNumber, 5)
        .subscribe(resp => {
          this.referTransactions = resp
          this.referTransactionsTemp = resp
          this.totalServicios = resp.length
          console.log(resp)
          this.cargando = false

        })

  }
  getDrawbacksTransactions(){
        this.cargando = true
    this.transactionsService.getTypeTransactions(this.pageNumber, 6)
            .subscribe(resp => {
              this.draw_backs = resp
              this.draw_backTemps = resp
              this.totalServicios = resp.length
              console.log(resp)
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
  searchChargeTransctions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.charges = this.chargesTemps
    }
    this.transactionsService.searchTypeTransactions(1, searchTerm)
                          .subscribe( (resp:any) => {
                                this.charges = resp 
                          })
  }
  searchServicesTransactions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.services = this.servicesTemps
    }
    this.transactionsService.searchTypeTransactions(2, searchTerm)
                          .subscribe( (resp:any) => {
                                this.services = resp 
                          })
  }
  searchFee(searchTerm: string){
    if(searchTerm.length === 0){
      return this.tarifas = this.tarifaTemps
    }
    this.transactionsService.searchTypeTransactions(3, searchTerm)
                          .subscribe( (resp:any) => {
                                this.tarifas = resp 
                          })
  }

  searchRefundTransactions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.referTransactions = this.referTransactionsTemp
    }
    this.transactionsService.searchTypeTransactions(4, searchTerm)
                          .subscribe( (resp:any) => {
                                this.referTransactions = resp 
                          })
  }
 
  searchReferTransactions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.reembolsos = this.reembolsoTemps
    }
    this.transactionsService.searchTypeTransactions(5, searchTerm)
                          .subscribe( (resp:any) => {
                                this.reembolsos = resp 
                          })
  }

  searchDrawbaacksTransctions(searchTerm: string){
    if(searchTerm.length === 0){
      return this.draw_backs = this.draw_backTemps
    }
    this.transactionsService.searchTypeTransactions(6, searchTerm)
                          .subscribe( (resp:any) => {
                                this.draw_backs = resp 
                          })
  }

  
}
