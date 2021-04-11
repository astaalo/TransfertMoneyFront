import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.page.html',
  styleUrls: ['./list-compte.page.scss'],
})
export class ListComptePage implements OnInit {
lists: any;
  constructor(private transactionsService: TransactionsService, private router: Router) { }

  ngOnInit() {
    this.getCompte();
  }
  getCompte(){
    this.transactionsService.getCompte().subscribe(
      data =>{
        this.lists = data["hydra:member"];
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
