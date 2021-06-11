import { Component, OnInit, Type } from '@angular/core';
interface TypeUseCode {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-prom-code',
  templateUrl: './add-prom-code.component.html',
  styleUrls: ['./add-prom-code.component.scss']
})
export class AddPromCodeComponent implements OnInit {
  CodeUse: TypeUseCode[] = [
    {value: 'One-Time', viewValue: 'Una vez por usuario'},
    {value: 'One-time-for-new-User', viewValue: 'Una vez para el primer pedido de nuevo usuario'},
    {value: 'Unlimited-times-for-all-Users', viewValue: 'Usos ilimitados para todos los usuarios'}
  ];
  SelectedCodeUse = this.CodeUse[2].value;
  constructor() { }

  ngOnInit(): void {
  }
  
}
