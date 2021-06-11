import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/Parameters/parameters.service';
import { Parameters } from 'src/app/models/Parameters.model';

@Component({
  selector: 'app-warranty-politics',
  templateUrl: './warranty-politics.component.html',
  styleUrls: ['./warranty-politics.component.scss']
})
export class WarrantyPoliticsComponent implements OnInit {


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
