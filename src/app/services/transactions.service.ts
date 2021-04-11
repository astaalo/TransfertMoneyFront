import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient, private router: Router) { }
  private reqUrl = "http://127.0.0.1:8000/api";

  transDepot(data){
    return this.http.post<any>(this.reqUrl +'/admin/transactions/depot', data);
  }

  getTrans(): Observable<any>{
    return this.http.get<any>(this.reqUrl +'/admin/transactions');
  }

  infobyCode(codeTrans: any){
    return this.http.get<any>(this.reqUrl +`/user/transaction/${codeTrans}`);
  }

  retrait(data:any){
    return this.http.put<any>(this.reqUrl + `/user/transactions/retrait`, data);
  }
  getUsers(): Observable<any>{
    return this.http.get<any>(this.reqUrl + `/admin/users`);
  }
  getAgence(): Observable<any>{
    return this.http.get<any>(this.reqUrl + `/admin/agences`);
  }
  getCompte(): Observable<any>{
    return this.http.get<any>(this.reqUrl + `/admin/comptes`);
  }
  getcompteId(): Observable<any>{
    return this.http.get<any>(this.reqUrl + `/admin/compte/transactions`);
  }
}
