import { AuthService } from './../services/auth/auth.service';
import { TransactionsService } from './../services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transactions: any;
  constructor(private router: Router,
              private transactionsService: TransactionsService,
              private authService: AuthService) {
      console.log('token : ',this.authService.getToken());
      
     }

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
