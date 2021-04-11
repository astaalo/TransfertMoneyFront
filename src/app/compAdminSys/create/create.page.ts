import { AjoutCreateService } from './../../services/ajout-create.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  myForm: FormGroup;
  errorMessage: string;
  constructor(private createService:AjoutCreateService, private router: Router) { }


  ngOnInit() {

    this.myForm = new FormGroup({
      nomAgence: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      compte: new FormControl('', [Validators.required]),
  });
}

get f() {
  return this.myForm.controls;
  }

  creerAgence(){
    console.log(this.myForm.value);
    const value = this.myForm.value;
    const create = new FormData();
    create.append("nomAgence",value.nomAgence);
    create.append("adresse",value.adresse);
    create.append("compte",value.compte);
    return this.createService.createdAgence(create).subscribe(
      (response)=> {
        const link = ['/liste-agence'];
        this.router.navigate(link);
        console.log(response)
      },
      (error)=> {
        this.errorMessage = 'Probleme de connexion au serveur';
        console.log(error)
      }
    )
  }
  getBackHome() {
    this.router.navigate(['/accueil-sys']);
  }
  }
