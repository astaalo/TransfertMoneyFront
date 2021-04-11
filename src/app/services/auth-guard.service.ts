import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private auth: AuthService, private storage: Storage) { }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //  if (this.auth.isAuthenticate()){
  //     return true;
  //  }
  //  this.router.navigate(['/connexion']);
  //  return false;
  // }
}
