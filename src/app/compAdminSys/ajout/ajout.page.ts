import { ProfilService } from './../../services/profil.service';
import { AjoutCreateService } from './../../services/ajout-create.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {
  avatar: any;
  image: any;
  profil: any;
  myForm: FormGroup;
  errorMessage: string;
  
  constructor(private createService:AjoutCreateService,
                      private ProfilService: ProfilService, 
                      private router: Router) { }


  ngOnInit() {

    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      profil: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
  });

  this.ProfilService.getProfil().subscribe(
    response=> {this.profil= response
    console.log(response)
    },
    error=>  console.log(error)
  )
}

postUsers(){
  console.log(this.myForm.value);
  const value = this.myForm.value;
  const user = new FormData();
  user.append("firstname",value.firstname);
  user.append("lastname",value.lastname);
  user.append("username",value.username);
  user.append("password",value.password);
  user.append("profil",value.profil);
  user.append("phone",value.phone);
  user.append("address",value.address);
  user.append("avatar",this.avatar);
  return this.createService.postUsers(user).subscribe(
    (response)=> {
      const link = ['/list'];
      this.router.navigate(link);
      console.log(response)
    },
    (error)=> {
      this.errorMessage = 'Probleme de connexion au serveur';
      console.log(error)
    }
  )
}

//  //recuperation de l'avatar
//  getAvatar(e:any) {
//   this.avatar= e.files.item(0);
//   console.log(this.avatar)

//   let reader = new FileReader();
//   reader.readAsDataURL( this.avatar)
//   reader.onload= ()=>{
//     this.image= reader.result
//     console.log(this.image)
//   }
// }
getBackHome() {
  this.router.navigate(['/accueil-sys']);
}
}
