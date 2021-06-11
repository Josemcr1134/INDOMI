import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChargeParameters, country, Parameters } from 'src/app/models/Parameters.model';
import { ParametersService } from 'src/app/services/Parameters/parameters.service';

@Component({
  selector: 'app-condition-terms',
  templateUrl: './condition-terms.component.html',
  styleUrls: ['./condition-terms.component.scss']
})
export class ConditionTermsComponent implements OnInit {
  public parameters: ChargeParameters
  public countries : country[] = []
  public parametersSelected : Parameters
  constructor(private parametersService:ParametersService) { }

  ngOnInit(): void {
    this.getParameters()
  }
  getParameters(){
    this.parametersService.getParameters()
          .subscribe( (resp:Parameters) => {
            this.parametersSelected = resp
          
   console.log(this.parametersSelected?.terms_url)


          })
  }
}
