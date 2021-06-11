import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';
import { GuardsService } from '../../services/GuardsService/guards.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
 public formSubmitted:boolean = false
 public loginform = this.fb.group({
   username: ['', [Validators.required, Validators.email]],
   password: ['', Validators.required]
 })
  durationInSeconds = 5;
  hide = true;
  constructor(private route: Router, private fb:FormBuilder, private loginService: LoginService, private guardsService: GuardsService) { }

  ngOnInit(): void {
   
  }
  login() {
        this.loginService.login(this.loginform.value)
                .subscribe(resp => {
                  console.log(resp)
                   this.route.navigateByUrl('/Pages')
 
                },  (err)=> {
                  Swal.fire('Error',err.statusText ,'error')
                  console.log(err)
                })
}

}
