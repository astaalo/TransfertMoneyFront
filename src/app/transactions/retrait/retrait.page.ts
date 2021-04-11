import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { TransactionsService } from 'src/app/services/transactions.service';
@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  show=true;
  hide = false;
  formRetrait: FormGroup;
  codeTrans;
  dateRetrait:any;
  dateDepot:any;
  type= "beneficiaire";
   dataCode: any;
  // dataCode= {
  //   "montant": '',
  //   "dateDepot": '',
  //   "dateRetrait":'',
  //   "userRetrait": '',
  //   "clientDepot": {
  //     "nomEmetteur": '',
  //     "prenomEmetteur": '',
  //     "phoneEmetteur": '',
  //     "cni": ''
  //   },
  //   "clientRetrait": {
  //     "nomBen": '',
  //     "prenomBen": '',
  //     "phoneBen": '',
  //     "cni": ''
  //   },
  //   "compteRetrait": {
  //     "solde": '',
  //   }
  // };
  dataRetrait:any;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient, 
              private trans: TransactionsService, 
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.formRetrait = this.formBuilder.group({
      codeTrans: ['',[ Validators.required, Validators.pattern('[0-9]{3}\-[0-9]{3}\-[0-9]{3}$')]],
      clientRetrait:this.formBuilder.group({
      cni: ['', [Validators.required, Validators.pattern('[0-9]{13}')]],
      } )
    })
    this.formRetrait.get('codeTrans').valueChanges.subscribe(
      async code=>{
        if(this.formRetrait.get('codeTrans').valid){

          this.trans.infobyCode(code).subscribe(
            data=>{
              this.dataCode=data
              console.log(data);
            }
          )

        } else {
          const alertcodeTrans = await this.alertCtrl.create({
            cssClass: 'my-custom-class',
            header: 'retrait refusé',
            message: 'le code nest pas correct' ,
            buttons: ['ok']
          });

          await alertcodeTrans.present();        }
      }
    )
  }

    // getCode(){
    //   this.http.get('http://127.0.0.1:8000/api/user/transaction/'+ this.codeTrans).subscribe(
    //     data=>{
    //       this.dataCode=data
    //       console.log(data)
    //     }
    //   )
    // }
  
  ShowAndHide(data: any)
  {
    // tslint:disable-next-line:triple-equals
    this.hide = data == 1 ? false : true;
  }

  GetRetrait() {
    if(this.formRetrait.valid){
      this.trans.retrait(this.formRetrait.value).subscribe(
        async (data)=>{
          this.dataRetrait=data
          console.log(data);

//alert pour confirmation pour afficher le resume de la transaction
//async presentAlertConfirm() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Confirmation',
    message: `EMETTEUR <br> <strong>${this.formRetrait.value.nomEmetteur}</strong><br>
                            <strong>${this.formRetrait.value.prenomEmetteur}</strong><br>
              TELEPHONE <br> <strong>${this.formRetrait.value.phoneEmetteur}</strong><br>
              N° CNI <br> <strong>${this.formRetrait.value.cni}</strong><br>
              MONTANT <br> <strong>${this.formRetrait.value.montant}</strong><br>
              RECEPTEUR <br> <strong>${this.formRetrait.value.nomBen}</strong><br>
                            <strong>${this.formRetrait.value.prenomBen}</strong><br>
              TELEPHONE <br> <strong>${this.formRetrait.value.phoneBen}</strong><br> `,
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel'
      }, {
        text: 'Confirmer',
        handler: () => {
          this.GetRetrait();
        }
      }
    ]
  });
  await alert.present();
//}
    }
  )
}}
  getBackHome() {
    this.router.navigate(['/accueil-user']);
  }
}