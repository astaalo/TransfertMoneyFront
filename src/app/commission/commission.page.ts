import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.page.html',
  styleUrls: ['./commission.page.scss'],
})
export class CommissionPage implements OnInit {
  transactions: any;
  constructor(private router:Router, private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.getTransaction();
  }
  getTransaction(){
    this.transactionsService.getTrans().subscribe(
      data =>{
        this.transactions = data["hydra:member"];
      },
      error =>{
        console.log(error)
      }
    );
  }

  getBackHome() {
    this.router.navigate(['/accueil-user']);
  }
}
