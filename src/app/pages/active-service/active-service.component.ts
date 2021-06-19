import { Component, OnInit } from '@angular/core';

import { ActiveService } from '../../services/ActiveServices/active.service';
import { ActiveServices, getServiceStatus } from 'src/app/models/ActiveServices.model';
import { way_points, getPayMethod } from '../../models/ActiveServices.model';
import {MatDialog} from '@angular/material/dialog';
import { ExpandServicesInfoComponent } from '../expand-services-info/expand-services-info.component';
import { city } from 'src/app/models/City.models';
import { CityService } from 'src/app/services/city/city.service';
@Component({
  selector: 'app-active-service',
  templateUrl: './active-service.component.html',
  styleUrls: ['./active-service.component.scss']
})
export class ActiveServiceComponent implements OnInit {

  public activatedServices: ActiveServices []
  public activatedServicesTemp: ActiveServices []
  public addresses: way_points
getStatus = getServiceStatus
getPayMethod = getPayMethod
 way_points: way_points[]
 public cargando : boolean = true
 public pageNumber:number = 1
 public totalServicios:number = 0
 public cities: city[]

  constructor(private activeservice:ActiveService, public dialog: MatDialog, public cityservice:CityService) { }

  ngOnInit(): void {
    this.cargando = true
    this.getActiveService()
  }
  filter(){
    this.getActiveService()
  }
 
  getActiveService(){
    this.cargando = true
    this.activeservice.getActiveServices(this.pageNumber)
            .subscribe( (resp:any) => {
              this.totalServicios = resp.length
              this.activatedServices = resp
              this.activatedServicesTemp  = resp
            this.cargando = false


              console.log(this.activatedServices)
               
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
      this.activeservice.searchActiveServices( searchTerm)
                          .subscribe( (resp:any) => {
                                this.activatedServices = resp 
                          })
  }
  openDialog() {
     const dialogRef = this.dialog.open(ExpandServicesInfoComponent);
 }
}