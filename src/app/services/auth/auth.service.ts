import { Injectable } from '@angular/core';

import { Plugins} from '@capacitor/core';
import {BehaviorSubject, from, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  myToken='';
  myRole='';
  decoded: any;
  url = 'http://127.0.0.1:8000/api';
  private _refresh$ = new Subject();
  role: string;
  idUser: any;
  constructor(private http: HttpClient, private router: Router) {
   
  }

  get refresh$(): any{
    return this._refresh$;
  }

 

  loggedIn(){
    return !! Storage.get({key: 'token'});
  }

  login(credentials: {username,password}): Observable<any>{
  return this.http.post(`${this.url}/login`, credentials).pipe(
    map((data: any) => data.token),
    switchMap(token =>{
      // return from(Storage.set({key: TOKEN_KEY, value: token}));
      return from(this.InfosSave(token));
    }),
    tap(_=> {
      this.isAuthenticated.next(true);
    })
  )
  }

  async InfosSave(token){
    this.myToken = token;
    let data = jwt_decode(token);
    console.log(data);
    this.myRole = data['roles'][0];
    await Storage.set({key: 'token', value: token});
    await Storage.set({key: 'role', value: data['roles'][0]});
    await Storage.set({key: 'telephone', value: data['username']});

 }

  getToken(){
  return this.myToken;
 }

  getMyid(){
    return this.idUser;
 }

  getRole(){
  return this.myRole;
}

  async getMyRole(){
  const token = await Storage.get({key: 'role'});
  if (token && token.value){
     this.role = token.value;

   return this.role;
  }
}

 

  logout(): Promise<void>{
    this.isAuthenticated.next(false);
    Storage.remove({key: 'role' });
    Storage.remove({key: 'telephone' });
    return Storage.remove({key: 'token'});
  }
}
