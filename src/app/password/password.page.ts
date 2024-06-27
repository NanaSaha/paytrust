import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ApisService} from "../apis.service"
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from "@ionic/angular";

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  jsonBody: any;
  constructor(public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { }


  ngOnInit() {
  }


  // openBox(){
  //   this.router.navigateByUrl('/boxopened')
  // }




  async openBox(){

    this.jsonBody =
    {
      'lockerNum': "1"
    }
    
    
    this.api.openSingleBox(this.jsonBody).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
      console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["resp_code"])
     if (code["resp_code"] == "000"){
     
       this.router.navigateByUrl('/boxopened')
     }
     else{
      const alert = await this.alertCtrl.create({
        message: "Something went wrong. Please try again",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      });
      alert.present();
     }
    
    });

    })
    .catch(async (error)=>{
      this.loadingCtrl.dismiss().then(async () => {
      const alert = await this.alertCtrl.create({
        message: "Something went wrong. Please try again",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      });
      alert.present();
    });

    })
    const loading = await this.loadingCtrl.create();
    loading.present();
   
  }
}
