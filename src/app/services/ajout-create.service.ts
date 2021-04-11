import { AgenceModel } from './../model/agence-model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AjoutCreateService {

  constructor(private http: HttpClient, private router: Router) { }
  private reqUrl = "http://127.0.0.1:8000/api";


  createdAgence(data){
    return this.http.post<any>(this.reqUrl +'/admin/agences', data);
  }

  getAgence(): Observable<AgenceModel[]>{
    return this.http.get<AgenceModel[]>(this.reqUrl +'/admin/agences');
  }

  postUsers(data){
    return this.http.post<any>(this.reqUrl +'/admin/users', data);
  }
}
