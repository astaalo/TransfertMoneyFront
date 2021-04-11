import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-list-agence',
  templateUrl: './list-agence.page.html',
  styleUrls: ['./list-agence.page.scss'],
})
export class ListAgencePage implements OnInit {
lists:any;
  constructor(private transactionsService: TransactionsService, private router: Router) { }

  ngOnInit() {
    this.getAgence();
  }
  getAgence(){
    this.transactionsService.getAgence().subscribe(
      data =>{
        this.lists = data["hydra:member"];
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
