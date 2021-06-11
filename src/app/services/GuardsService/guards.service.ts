import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

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
  constructor(private route: Router, ) { }
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.token.length > 20){
      this.route.navigate(['/Pages']);
    } else {
     

      this.route.navigateByUrl('/')
      return false;
    }
  }
}
