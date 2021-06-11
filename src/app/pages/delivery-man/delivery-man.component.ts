import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections'
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ChargeDomiData, Domi, DomiData } from 'src/app/models/DeliveryMan.model';
import { TransactionsService } from '../../services/Transactiones/transactions.service';
import { DeliveryManService } from '../../services/DeliveryMan/delivery-man.service';
import { DrawBacks, getTransactionsType } from 'src/app/models/DrawBacks.model';
import { getStatus } from '../../models/DrawBacks.model';
import { getDetails } from 'src/app/models/transactions.model';
import { BlockedDomi } from '../../models/DeliveryMan.model';
import Swal from 'sweetalert2';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-delivery-man',
  templateUrl: './delivery-man.component.html',
  styleUrls: ['./delivery-man.component.scss']
})
export class DeliveryManComponent implements OnInit {
   public domis : Domi[] = []
   public domistemp : Domi[] = []
   public drawBacks: DrawBacks [] = []
   public drawBacksTemp: DrawBacks [] = []
   public totalDrawBacks: number = 0
   public domi:Domi

   public totalDomi : number = 0
  public blockedDomis: BlockedDomi[] =[]
  public TotalblockedDomis: number =0
  public domiData: ChargeDomiData
  public getStatus = getStatus
  public getDetails = getDetails
  public getTransactionType = getTransactionsType
  public cargando : boolean = true
  public pageNumber:number = 1
   public totalServicios:number = 0
  constructor(private http: HttpClient, private domiService: DeliveryManService) { }

  ngOnInit(): void {
    this.getDomi()
    this.getDrowBacks()
    this.getBlockedDomi()
  }
  getDomi(){
    this.cargando = true
    this.domiService.getDomi(true  , false, this.pageNumber)
                      .subscribe( ({domis, count}) =>{
                            this.totalDomi = count
                            this.domis = domis
                            this.domistemp = domis
                          this.cargando = false
                          this.totalServicios = count
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
    this.getDomi()
    this.cargando = false
  
  }
  getBlockedDomi(){
    this.cargando = true

    this.domiService.getDomi(false  , false, this.pageNumber)
                      .subscribe( ({domis, count}) =>{
                            this.TotalblockedDomis = count
                            this.blockedDomis = domis
                          this.cargando = false

                        }) 
  }
  getDrowBacks(){
    this.cargando = true

    this.domiService.getDrawBacks(this.pageNumber)
              .subscribe(({drawBacks, count}) => {
                this.drawBacks = drawBacks
                this.totalDrawBacks = count
                this.drawBacksTemp = drawBacks
                this.cargando = false

              })
  }
  searchDrawbacks(searchTerm: string){
    if(searchTerm.length === 0){
      return this.drawBacks =  this.drawBacksTemp
    }
    this.domiService.searchDrawbacks(searchTerm)
                        .subscribe((drawBacks) => {
                            this.drawBacks = drawBacks
                        } )
  }
  BlockDomi(domi:Domi ){
    let data ={
      username:domi.username,
      first_name: domi.first_name,
      last_name: domi.last_name,
      id: domi.id
    }
  Swal.fire({
    title: '¿Bloquear Domi?',
    text: `Estas a punto de bloquear a  ${data.first_name} ${data.last_name}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, bloquear!'
  }).then((result) => {
    if (result.value) {
     this.domiService.blockDomi(data )
              .subscribe(resp => {
                this.getDomi();
                this.getBlockedDomi()

              Swal.fire('Domi bloqueado',
              `${data.first_name} ${data.last_name} fue bloqueado`,
              'success' )
            }
              )}
   } 
  )} 
  DisBlockDomi(domi:Domi ){
    let data ={
      username:domi.username,
      first_name: domi.first_name,
      last_name: domi.last_name,
      id: domi.id
    }
  Swal.fire({
    title: '¿Desbloquear Domi?',
    text: `Estas a punto de desbloquear a  ${data.first_name} ${data.last_name}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, desbloquear!'
  }).then((result) => {
    if (result.value) {
     this.domiService.blockDomi(data )
              .subscribe(resp => {
                this.getDomi();
                this.getBlockedDomi()

              Swal.fire('Domi desbloqueado',
              `${data.first_name} ${data.last_name} fue desbloqueado`,
              'success' )
            }
              )}
   } 
  )} 
  searchDomi(searchTerm: string){
    this.cargando = true

    if(searchTerm.length === 0){
      return this.domis = this.domistemp
    }
      this.domiService.searchDomi(true, false, searchTerm)
                          .subscribe( (domis:any) => {
                                this.domis = domis 
                                this.cargando = false
                          })
  }
 
}
  