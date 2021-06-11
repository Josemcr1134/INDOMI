import { Component, Input, OnInit } from '@angular/core';
import { ActiveService } from '../../services/ActiveServices/active.service';
import { ActiveServices, chargeActiveServices, getServiceStatus } from 'src/app/models/ActiveServices.model';
import { way_points, getPayMethod } from '../../models/ActiveServices.model';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-expand-services-info',
  templateUrl: './expand-services-info.component.html',
  styleUrls: ['./expand-services-info.component.scss']
})
export class ExpandServicesInfoComponent implements OnInit {
  public activatedServices: ActiveServices []
  public activatedServicesTemp: ActiveServices []
  getStatus = getServiceStatus
  getPayMethod = getPayMethod
/*   way_points: way_points[]
 */
public cargando : boolean = true
public pageNumber:number = 1
public totalServicios:number = 0
  constructor(private activeservice:ActiveService, public dialog: MatDialog) { }
/*   @Input() ctiveService = ''
 */  ngOnInit(){
   this.cargando = true
     this.getActiveService()
 
  }
   getActiveService(){
     this.cargando = true
    this.activeservice.getActiveServices(this.pageNumber)
            .subscribe( (resp: any) => {
              this.activatedServices = resp
              this.activatedServicesTemp = resp
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
    this.getActiveService()
    this.cargando = false
  }
  searchActiveServices(searchTerm:string){
    if(searchTerm.length === 0){
      return this.activatedServices = this.activatedServicesTemp
    }
    this.cargando = true
      this.activeservice.searchActiveServices( searchTerm)
                          .subscribe( (resp:any) => {
                                this.activatedServices = resp 
                                this.cargando = false
                          })
  }
}
