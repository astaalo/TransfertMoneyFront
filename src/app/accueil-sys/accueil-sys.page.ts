import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-accueil-sys',
  templateUrl: './accueil-sys.page.html',
  styleUrls: ['./accueil-sys.page.scss'],
})
export class AccueilSysPage implements OnInit {
solde:any;
  constructor(private router: Router,private transactionsService:TransactionsService) { }

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
  getBackHome() {
    this.router.navigate(['/menu']);
  }
}
