import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  lists: any;

  constructor(private transactionsService: TransactionsService, private router: Router) { 
    
  }
  ngOnInit() {

    this.getUser();
  }
  getUser(){
    this.transactionsService.getUsers().subscribe(
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
