import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule  } from "@angular/router";

import { LoginComponent } from './login/login.component';

import {  MatFormFieldModule, MatLabel,   } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecoverComponent,
  ],
  exports:[
    LoginComponent,
    RecoverComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class AuthModule { }
