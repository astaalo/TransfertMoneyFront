import { AuthGuardService } from './../services/auth-guard.service';

import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
    console.log('token : ',this.authService.getToken());
    
  }
 
  intercept(req, next){
    if (!this.authService.loggedIn()) {
      return next.handle(req);
    } else {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
      return next.handle(req);
  }
}
}
