import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PQRService } from '../../services/PQR/pqr.service';
import { getPQRType, PQR, PQRID } from 'src/app/models/PQR.models';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { getUserType } from '../../models/PQR.models';
import Swal from 'sweetalert2';
import { CityService } from 'src/app/services/city/city.service';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
 
  public pqrs: PQR[];
  public pqrsCompleteds: PQR[];
  public pqrsRevisions: PQR[];
  getUsertype = getUserType;
  getPqrType = getPQRType;
  public statusReview:number = 2;
  public statusComplete:number = 3;
  public mostrarmas : boolean = false;
 constructor(private router: Router, public dialog: MatDialog, public pqrService: PQRService, public cityservice: CityService) { }

 ngOnInit(): void {
   this.getPQRPending();
   this.getPQRRevision();
   this.getPQRCompleted();

 }
 filter(){
  this.getPQRPending();
  this.getPQRRevision();
  this.getPQRCompleted();
 }
 mostrarMas() {
      this.mostrarmas = true;
  };
 mostarMenos() {
      this.mostrarmas = false;
  };

  getPQRPending(){
    this.pqrService.getPQR(1)
            .subscribe((resp:any) => {
                this.pqrs = resp;
            } )
  };
  getPQRRevision(){
    this.pqrService.getPQR(2)
            .subscribe((resp:any) => {
                this.pqrsRevisions = resp;
            } )
  };
  getPQRCompleted(){
    this.pqrService.getPQR(3)
            .subscribe((resp:any) => {
                this.pqrsCompleteds = resp;
            } )
  };
  ReviewPQR(pqr: PQR){
    let data = {
      id: pqr.id,
      status: this.statusReview,
      description: pqr.pqr_detail.description,
      first_name : pqr.user.first_name,
      last_name : pqr.user.last_name,
      pqr: pqr.pqr,
      email: pqr.email,
      username: pqr.user.username
    }
    console.log(data)
      Swal.fire({
        title: 'Revisar PQR?',
        text: `¿Quieres revisar la ${this.getPqrType(data.pqr)} de ${data.first_name} ${data.last_name}  `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText:'Si, Revisar'
      },).then((result)=> {
      if(result.value){
        this.pqrService.reviewPQR(data)
                  .subscribe(resp => {
                    this.getPQRCompleted()
                    this.getPQRPending()
                    this.getPQRRevision()
                  Swal.fire(`PQR mandado a revision`,
                    `success` )
                 }
          )}
       }
    )}
 
  CompletePQR(pqr: PQR){
    let data = {
      id: pqr.id,
      status: this.statusComplete,
      description: pqr.pqr_detail.description,
      first_name : pqr.user.first_name,
      last_name : pqr.user.last_name,
      pqr: pqr.pqr,
      email: pqr.email,
      username: pqr.user.username
    }
      Swal.fire({
        title: '¿Completar PQR?',
        text: `¿Quieres completar la  ${this.getPqrType(data.pqr)} de ${data.first_name} ${data.last_name}  `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText:'Si, Completar!'
      },).then((result)=> {
      if(result.value){
        this.pqrService.reviewPQR(data)
                  .subscribe(resp => {
                    this.getPQRCompleted()
                    this.getPQRPending()
                    this.getPQRRevision()
                  Swal.fire(`PQR revisado`,
                    `success` )
                 }
          )}
       }
    )}
 
  deletePQR(pqr: PQR){
    let data = {
      id: pqr.id,
      status: this.statusComplete,
      description: pqr.pqr_detail.description,
      first_name : pqr.user.first_name,
      last_name : pqr.user.last_name,
      pqr: pqr.pqr,
      email: pqr.email,
      username: pqr.user.username
    }
      Swal.fire({
        title: 'Borrar PQR?',
        text: `¿Quieres borrar la  ${this.getPqrType(data.pqr)} de ${data.first_name} ${data.last_name}  `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText:'Si, Borrar!'
      },).then((result)=> {
      if(result.value){
        this.pqrService.deletePQR(data)
                  .subscribe(resp => {
                    this.getPQRCompleted()
                    this.getPQRPending()
                    this.getPQRRevision()
                  Swal.fire(`PQR borrado`,
                    `success` )
                 }
          )}
       }
    )}
 

}
