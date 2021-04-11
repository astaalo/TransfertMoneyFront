import { AuthService } from './../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-accueil-user',
  templateUrl: './accueil-user.page.html',
  styleUrls: ['./accueil-user.page.scss'],
})
export class AccueilUserPage implements OnInit {
solde:any;
  constructor(private router: Router, private auth: AuthService, private transactionsService: TransactionsService) { }

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
