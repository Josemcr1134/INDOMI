import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.scss']
})
export class ChangePasswordAdminComponent implements OnInit {
  password = new FormControl('', [Validators.required, Validators.email]);
  password1 = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  Twohide =  true
  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (!this.password1.value === this.password.value) {
       'Las contraseñas no coinciden';
    } 

  }
}
