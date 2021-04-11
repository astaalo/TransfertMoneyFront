import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private _reqUrl = "http://127.0.0.1:8000/api";

  constructor( private http: HttpClient) { }

  getProfil(){
    return this.http.get(this._reqUrl+'/admin/profils',{headers:{Accept:'Application/json'}});
  }
}
