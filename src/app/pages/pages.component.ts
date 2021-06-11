import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component';
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  constructor( private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog, private route: Router, private loginService: LoginService) { }
    public  adminName: any = ''
  AccountDetails() {
   /* const dialogRef = this.dialog.open(UserInformationComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   }); */
 }
 
  ChangePassword() {
   const dialogRef = this.dialog.open(ChangePasswordAdminComponent);
   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
 }

 ngOnInit(): void {
    this.adminName = localStorage.getItem('first_name')

 }
 logout(){
   this.route.navigateByUrl('')
   localStorage.removeItem('token')
   localStorage.removeItem('last_name')
   localStorage.removeItem('ParameterId')
   localStorage.removeItem('username')
   localStorage.removeItem('refresh')
   localStorage.removeItem('id')
   localStorage.removeItem('first_name')
 }
 close(){
   
 }
}
