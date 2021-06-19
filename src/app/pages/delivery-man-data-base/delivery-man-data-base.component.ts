import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {delay, map, startWith} from 'rxjs/operators';
import { ChargeDomiData, Domi, getVehicleType } from 'src/app/models/DeliveryMan.model';
import { person } from 'src/app/models/transactions.model';
import { DeliveryManService } from 'src/app/services/DeliveryMan/delivery-man.service';
import Swal from 'sweetalert2';
import { DomiData } from '../../models/DeliveryMan.model';


@Component({
  selector: 'app-delivery-man-data-base',
  templateUrl: './delivery-man-data-base.component.html',
  styleUrls: ['./delivery-man-data-base.component.scss']
})
export class DeliveryManDataBaseComponent implements OnInit {
  public domiSeleccionado: ChargeDomiData
  public domis : Domi[] = []
  public person: person
  getVehicleType = getVehicleType
  public domiDataForm: FormGroup
 constructor(private activatedRoute: ActivatedRoute, 
              private domiService: DeliveryManService, private router:Router,
              private fb : FormBuilder ) {}

 ngOnInit(): void {
    this.domiDataForm  = this.fb.group({
      first_name: [''],
      last_name: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      phone : ['', Validators.required ],
      refer_code: ['', Validators.required],
      vehicle_type: ['', Validators.required],
      vehicle_plate: ['', Validators.required],
      soat_expedition_date: ['', Validators.required],  
      soat_exp_date: ['', Validators.required],
      doc_number: ['', Validators.required],
      exp_date: ['', Validators.required],
      license_number: ['', Validators.required],
      license_exp_date: ['', Validators.required],
    })
    this.activatedRoute.params.subscribe(({id}) => this.getDomiById(id))
 }
 getDomiById(id : number){
  this.domiService.getDomiById(id)
                .pipe(
                  delay(100)
                )
                .subscribe( resp => {
                  console.log(resp)
                  this.domiSeleccionado = resp;
                   this.domiDataForm.controls['first_name'].setValue(this.domiSeleccionado.first_name);
                   this.domiDataForm.controls['last_name'].setValue(this.domiSeleccionado.last_name);
                   this.domiDataForm.controls['birthday'].setValue(this.domiSeleccionado.person.birthday);
                    this.domiDataForm.controls['email'].setValue(this.domiSeleccionado.email);
                 this.domiDataForm.controls['city'].setValue(this.domiSeleccionado.person.city.name);

                   this.domiDataForm.controls['vehicle_type'].setValue(getVehicleType(this.domiSeleccionado.domidata.vehicle_type));
                   this.domiDataForm.controls['vehicle_plate'].setValue(this.domiSeleccionado.domidata.vehicle_plate);
                   this.domiDataForm.controls['soat_expedition_date'].setValue(this.domiSeleccionado.domidata.soat_expedition_date);
                   this.domiDataForm.controls['soat_exp_date'].setValue(this.domiSeleccionado.domidata.soat_exp_date);
                   this.domiDataForm.controls['doc_number'].setValue(this.domiSeleccionado.domidata.doc_number);
                   this.domiDataForm.controls['exp_date'].setValue(this.domiSeleccionado.domidata.exp_date);
                   this.domiDataForm.controls['license_number'].setValue(this.domiSeleccionado.domidata.license_number);
                   this.domiDataForm.controls['license_exp_date'].setValue(this.domiSeleccionado.domidata.license_exp_date); 
                   this.domiDataForm.controls['phone'].setValue(this.domiSeleccionado.person.phone);
                   this.domiDataForm.controls['refer_code'].setValue(this.domiSeleccionado.person.refer_code);
                  });
}
UpdateDomiById(){
 
  this.domiService.UpdateDomiById(this.domiDataForm.value, this.domiSeleccionado.id)
              .subscribe( resp => {
                this.domiSeleccionado = this.domiDataForm.value
                console.log(resp)
                Swal.fire('Actualizado','Parametros Actualizados', 'success')
              }, (err) => {
                Swal.fire('Error',  'error')
                console.log(err)
              })
}

 }



/*   .subscribe( resp => {
                                        this.parameters = this.parametersForm.value
                                        console.log(resp)
                                        Swal.fire('Actualizado', 'Parametros Actualizados', 'success')
                                      }, (err) => {
                                        Swal.fire('Error', err.error, 'error')
                                      } ) */

