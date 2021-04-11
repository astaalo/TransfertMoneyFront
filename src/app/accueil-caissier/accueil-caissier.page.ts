import { AuthService } from './../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-accueil-caissier',
  templateUrl: './accueil-caissier.page.html',
  styleUrls: ['./accueil-caissier.page.scss'],
})
export class AccueilCaissierPage implements OnInit {
solde:any;
  constructor(private router: Router,private auth:AuthService, private transactionsService: TransactionsService) { }

  ngOnInit() {


    this.getCompte();
  }
  getCompte(){
    this.transactionsService.getcompteId().subscribe(
      data =>{
        this.solde = data;
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
    this.router.navigate(['/menu']);
  }
}
