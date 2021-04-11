import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-caissier',
  templateUrl: './list-caissier.page.html',
  styleUrls: ['./list-caissier.page.scss'],
})
export class ListCaissierPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getBackHome() {
    this.router.navigate(['/accueil-sys']);
  }
}
