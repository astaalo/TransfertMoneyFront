import { CalculatriceService } from './../../services/calculatrice.service';
import { TransactionsService } from './../../services/transactions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
  form: FormGroup;
  errorMessage: string;
  montant: number;
  frais: number;
  total: number;
  type= "emetteur";

  constructor(private trans:TransactionsService, 
              public alertController: AlertController, 
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private calcul: CalculatriceService,
              private router: Router) { }
  
  ngOnInit() {

    this.form = new FormGroup({
      cni: new FormControl('',[
        Validators.required,
        Validators.maxLength(13)
      ]),
      prenomEmetteur: new FormControl('', [Validators.required]),
      nomEmetteur: new FormControl('', [Validators.required]),
      phoneEmetteur: new FormControl('', [Validators.required]),
      montant: new FormControl('', [Validators.required]),
      frais: new FormControl('', [Validators.required]),
      total: new FormControl('', [Validators.required]),
      prenomBen: new FormControl('', [Validators.required]),
      nomBen: new FormControl('', [Validators.required]),
      phoneBen: new FormControl('', [Validators.required]),
  });
}

get f() {
  return this.form.controls;
} 


//alert pour confirmation pour afficher le resume de la transaction
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirmation',
    message: `EMETTEUR <br> <strong>${this.form.value.nomEmetteur}</strong><br>
                            <strong>${this.form.value.prenomEmetteur}</strong><br>
              TELEPHONE <br> <strong>${this.form.value.phoneEmetteur}</strong><br>
              N° CNI <br> <strong>${this.form.value.cni}</strong><br>
              MONTANT <br> <strong>${this.form.value.montant}</strong><br>
              RECEPTEUR <br> <strong>${this.form.value.nomBen}</strong><br>
                            <strong>${this.form.value.prenomBen}</strong><br>
              TELEPHONE <br> <strong>${this.form.value.phoneBen}</strong><br> `,
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel'
      }, {
        text: 'Confirmer',
        handler: () => {
          this.depot();
        }
      }
    ]
  });
  await alert.present();
}
//alert cas de success
async succes(data) {
  const alert = await this.alertController.create({
    header: 'Transfert réussi!!!',
    message: 'CODE DE TRANSACTION: ' + data,
    buttons: ['OK']
  });

  await alert.present();
}

onSelect(clic) {
  this.type = clic;
}

//fonction calculateur
calculateur(){
  this.frais = this.calcul.totalCommission(this.montant);
  this.total = this.montant + this.frais;
}
depot(){
  // console.log(this.form.value);
  const body = {
    montant: this.montant,
    clientDepot: {
      nomEmetteur: this.form.value.nomEmetteur,
      prenomEmetteur: this.form.value.prenomEmetteur,
      phoneEmetteur: this.form.value.phoneEmetteur,
      cni: this.form.value.cni
    },
    clientRetrait: {
      nomBen: this.form.value.nomBen,
      prenomBen: this.form.value.prenomBen,
      phoneBen: this.form.value.phoneBen
    }
  };

  console.log(body);
  this.http.post('http://127.0.0.1:8000/api/admin/transactions/depot', body).subscribe(
    (succes: any) => {
      this.succes(succes);
    },
    error => {
      console.log(error);
    }
  );
}

getBackHome() {
    this.router.navigate(['/accueil-user']);
  }
}

