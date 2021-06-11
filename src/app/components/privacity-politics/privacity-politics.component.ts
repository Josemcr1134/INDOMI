import { Component, OnInit } from '@angular/core';
import { ChargeParameters, country, Parameters } from 'src/app/models/Parameters.model';
import { ParametersService } from 'src/app/services/Parameters/parameters.service';

@Component({
  selector: 'app-privacity-politics',
  templateUrl: './privacity-politics.component.html',
  styleUrls: ['./privacity-politics.component.scss']
})
export class PrivacityPoliticsComponent implements OnInit {

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
          


          })
        }
  }
