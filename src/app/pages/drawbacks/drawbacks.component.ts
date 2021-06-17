import { Component, OnInit } from '@angular/core';
import { city } from 'src/app/models/City.models';
import { DrawBacks, getStatus, getTransactionsType } from 'src/app/models/DrawBacks.model';
import { getDetails } from 'src/app/models/transactions.model';
import { CityService } from 'src/app/services/city/city.service';
import { DrawbacksService } from 'src/app/services/DrawBacks/drawbacks.service';
import { DeliveryManService } from '../../services/DeliveryMan/delivery-man.service';

@Component({
  selector: 'app-drawbacks',
  templateUrl: './drawbacks.component.html',
  styleUrls: ['./drawbacks.component.scss']
})
export class DrawbacksComponent implements OnInit {
  public getStatus = getStatus
  public getDetails = getDetails
  public getTransactionType = getTransactionsType
  public cargando : boolean = true
  public pageNumber:number = 1
   public totalServicios:number = 0
   public pendingdrawBacks: DrawBacks [] = []
   public pendingdrawBacksTemp: DrawBacks [] = []
   public completedDrawbacks: DrawBacks [] = []
   public completedDrawbacksTemp: DrawBacks [] = []
   public rejectedDrawbacks: DrawBacks [] = []
   public rejectedDrawbacksTemps: DrawBacks [] = []
   public totalDrawBacks: number = 0
   public totalcompletedDrawBacks: number = 0
   public totalRejectedDrawbacks: number = 0
  public pending = false
  public cities: city[]

  constructor( private drawbacksService: DrawbacksService, public cityservice: CityService) { }

  ngOnInit(): void {
    this.getPendingDrowBacks()
    this.getRejected()
    this.getCompleted()

  }
  
  filter(){
   this.getPendingDrowBacks()
    this.getRejected()
    this.getCompleted() 
  }
  searchPendingDrawbacks(searchTerm: string){
    if(searchTerm.length === 0){
      return this.pendingdrawBacks =  this.pendingdrawBacksTemp
    }
    this.drawbacksService.searchDrawbacks(searchTerm, 1)
                        .subscribe((drawBacks) => {
                            this.pendingdrawBacks = drawBacks
                        } )
  }
  searchRejectedDrawbacks(searchTerm: string){
    if(searchTerm.length === 0){
      return this.rejectedDrawbacks =  this.rejectedDrawbacksTemps
    }
    this.drawbacksService.searchDrawbacks(searchTerm, 3)
                        .subscribe((drawBacks) => {
                            this.rejectedDrawbacks = drawBacks
                        } )
  }
  searchCompleted(searchTerm: string){
    if(searchTerm.length === 0){
      return this.completedDrawbacks =  this.completedDrawbacksTemp
    }
    this.drawbacksService.searchDrawbacks(searchTerm , 2)
                        .subscribe((drawBacks) => {
                            this.completedDrawbacks = drawBacks
                        } )
  }
  getPendingDrowBacks(){
    this.cargando = true

    this.drawbacksService.getDrawBacks(this.pageNumber, 1)
              .subscribe(({drawBacks, count}) => {
                this.pendingdrawBacks = drawBacks
                this.totalDrawBacks = count
                this.pendingdrawBacksTemp = drawBacks

                this.cargando = false
              })
  }
  getCompleted(){
    this.cargando = true

    this.drawbacksService.getDrawBacks(this.pageNumber, 2)
              .subscribe(({drawBacks, count}) => {
                this.completedDrawbacks = drawBacks
                this.totalcompletedDrawBacks = count
                this.completedDrawbacksTemp = drawBacks

                this.cargando = false

              })
  }
  getRejected(){
    this.cargando = true

    this.drawbacksService.getDrawBacks(this.pageNumber, 3)
              .subscribe(({drawBacks, count}) => {
                this.rejectedDrawbacks = drawBacks
                this.totalRejectedDrawbacks = count
                this.rejectedDrawbacks = drawBacks

                this.cargando = false

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
    this.getPendingDrowBacks()
    this.getCompleted()
    this.getRejected()
    this.cargando = false
  
  }
}
