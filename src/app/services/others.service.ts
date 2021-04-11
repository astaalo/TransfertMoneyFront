import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OthersService {

  
  constructor(private http: HttpClient, private router: Router) { }
  private reqUrl = "http://127.0.0.1:8000/api";


  createdAgence(data){
    return this.http.post<any>(this.reqUrl +'/admin/agences', data);
  }

  getAgence(){
    return this.http.get<any>(this.reqUrl +'/admin/agences');
  }
}
