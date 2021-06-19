import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  get token(): string{
    return localStorage.getItem('token');

  }
  get refreshToken(): string{
    return localStorage.getItem('refresh') || '';

  }
   
  get headers() {
    return {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  }
  constructor(private route: Router,private loginService: LoginService ) { }
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot) {
/*       if (this.token ) {
        this.route.navigateByUrl('/Pages')
        return true
    } else {
     this.route.navigateByUrl('')
     return false
    } */
     
  }
}
