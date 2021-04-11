import { AuthService } from './../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  solde:any;
  constructor(private transactionsService: TransactionsService, private router:Router,private auth:AuthService) { }

  ngOnInit() {


    this.getCompte();
  }
  getCompte(){
    this.transactionsService.getcompteId().subscribe(
      data =>{
         this.solde = data;
         //console.log(data);
      },
      error =>{
        console.log(error)
      }
    );
  }

  deconnexion() {
    this.auth.logout();
  }
  getBackHome() {
    this.router.navigate(['/accueil']);
  }
}
