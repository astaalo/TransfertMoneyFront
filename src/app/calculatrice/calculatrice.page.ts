import { CalculatriceService } from './../services/calculatrice.service';
import { TransModel } from './../model/trans-model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.page.html',
  styleUrls: ['./calculatrice.page.scss'],
})
export class CalculatricePage implements OnInit {
  CalculForm: FormGroup;
  frais: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
      private calcul: CalculatriceService,
      private http: HttpClient, private alertCtrl: AlertController) {
  }
  ngOnInit() {
    this.CalculForm = this.formBuilder.group(
      {
        montant: ['', Validators.required]
      });
  }
  // @ts-ignore
  async calc() {
    let {frais}=<any> await this.http.get(`${this.calcul.url}/transaction/frais/${this.CalculForm.get('montant').value}`).toPromise()
  console.log(frais);

    const alertcodeTrans = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Calculateur',
      message: 'le frais du montant saisi est : ' + frais ,
      buttons: ['ok']
    });

    await alertcodeTrans.present();
    }
}