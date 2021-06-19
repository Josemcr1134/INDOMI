import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CityService } from './services/city/city.service';
import { city } from './models/City.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'INDOMI';

  constructor(private cityService: CityService){}
  
  ngOnInit(){
       this.cityService.getCities(1);
  }
}
