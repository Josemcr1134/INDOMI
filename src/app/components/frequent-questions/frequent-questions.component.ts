import { Component, OnInit } from '@angular/core';
import { ChargeParameters, country, Parameters } from 'src/app/models/Parameters.model';
import { ParametersService } from 'src/app/services/Parameters/parameters.service';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.scss']
})
export class FrequentQuestionsComponent implements OnInit {
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



