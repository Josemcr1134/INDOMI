import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';
import { GuardsService } from '../../services/GuardsService/guards.service';
import { city } from '../loginInterfaces/login-form.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public cities : city[]

 public formSubmitted:boolean = false
 public loginform = this.fb.group({
   username: ['', [Validators.required]],
   password: ['', Validators.required],
})
  durationInSeconds = 5;
  hide = true;
  /*    city: ['', Validators.required]
 */ 
  constructor(private route: Router, private fb:FormBuilder, private loginService: LoginService, private guardsService: GuardsService) { }

  ngOnInit(): void {
/*    this.getCity()
 */  }
  login() {
        this.loginService.login(this.loginform.value)
                .subscribe(resp => {
                  console.log(resp)
                   this.route.navigateByUrl('/Pages')
 
                },  (err)=> {
                  Swal.fire('Error', 'Usuario o contraseña incorrectas' ,'error')
                  console.log(err)
                  console.log(this.loginform.value)
                })
}
  /* getCity(){
    this.loginService.getCity()
          .subscribe( (resp: any) => {
            this.cities = resp

          })
  } */
}
