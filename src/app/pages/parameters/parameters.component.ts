import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/Parameters/parameters.service';
import { ChargeParameters, country, Parameters } from 'src/app/models/Parameters.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  public parameters: ChargeParameters
  public countries : country[] = []
  public parametersForm:FormGroup
  public parametersSelected : Parameters
  public cargando : boolean = true
  constructor(private parametersService: ParametersService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.cargando = true
    this.getParameters()
    this.getCountries()

    this.parametersForm = this.fb.group({
      id:               ['', Validators.required ] ,
      user_tax_percent: ['', Validators.required],
      domi_tax_percent: ['', Validators.required],
      km_value:         ['', Validators.required],
      min_service_value:['', Validators.required],
      service_inc_dec:  ['', Validators.required],
      min_drawback_value:['', Validators.required],
      max_debt_value:['', Validators.required],
      service_life_time: ['', Validators.required],
      offer_life_time:   ['', Validators.required],
      refer_code_reward: ['', Validators.required],
      insurance_value:   ['', Validators.required],
      share_url:   ['', Validators.required],
      pqr_url:   ['', Validators.required],
      terms_url:   ['', Validators.required],
      privacy_url:   ['', Validators.required],
      frequently_url:   ['', Validators.required],
      payment_url:   ['', Validators.required],
      help_url:   ['', Validators.required],
      reward_url:   ['', Validators.required],
      about_url	:   ['', Validators.required],
      drawback_url	:   ['', Validators.required],
      country:           ['', Validators.required],
      
    }    )

  }
  getParameters(){
    this.cargando = true
    this.parametersService.getParameters()
          .subscribe( resp => {
            this.parametersSelected = resp
            this.parametersForm.setValue(this.parametersSelected)
            console.log(resp)
            this.cargando = false


          })
  }
  getCountries(){
    this.cargando = true

    this.parametersService.getCountry()
            .subscribe((resp:any) => {
              this.countries = resp
              this.cargando = false

            })

          }
   changeParametros(){
              this.parametersService.changeParameters( this.parametersForm.value)
                                      .subscribe( resp => {
                                        this.parameters = this.parametersForm.value
                                        console.log(resp)
                                        Swal.fire('Actualizado', 'Parametros Actualizados', 'success')
                                      }, (err) => {
                                        Swal.fire('Error', err.error, 'error')
                                      } )
          }
}
