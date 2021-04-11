import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import{ Plugins} from '@capacitor/core';
import { AuthService } from '../services/auth/auth.service';


const {Storage}=Plugins;
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  role: string;

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      phone: new FormControl('771734216',[
        Validators.required,
        Validators.maxLength(9)
      ]),
      password: new FormControl('pass_1234', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10) ]),
  });
  }
  get f() {
    return this.loginForm.controls;
  }
  
  connexionUser(){
    this.auth.login(this.loginForm.value)
    .subscribe(
      async response => {
       
       const role = this.auth.getRole();
       console.log("le role: ",role)
        if(role=='ROLE_AdminSystem'){
          this.route.navigate(['/accueil-sys'])}
        if(role=='ROLE_AdminAgent'){
          this.route.navigate(['/accueil-user'])
        }if(role=='ROLE_Caissier'){
          this.route.navigate(['/accueil-caissier'])
        }if(role=='ROLE_Utilisateur'){
          this.route.navigate(['/accueil'])
         } 
      },
      (error) => {
        this.errorMessage = 'Login ou Password incorrect';
        console.log(error);
      }
    )
  }

}
