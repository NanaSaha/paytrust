
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

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  jsonBody: any;
  role: any;
  constructor(private modalCtrl: ModalController,public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { }

  ngOnInit() {

  
  }

  newTrans(){
    console.log("Role::", this.role)
    localStorage.setItem("role", this.role)

    this.modalCtrl.dismiss(null, 'cancel');
    this.router.navigateByUrl('/transaction')
  }

  radioGroupChange(event: any) {
    this.role = event.detail.value
    console.log('Selected value:', this.role);
    // Do something with the selected value
  }



//   async opened(){

//     this.jsonBody =
//     {
//       'lockerNum': localStorage.getItem("lockerNum")
//     }
    
    
//     this.api.openSingleBox(this.jsonBody).then((result)=>{
 
//       this.loadingCtrl.dismiss().then(async () => {
      
//       console.log("results:::", JSON.parse(JSON.stringify(result)))
//       var code = JSON.parse(JSON.stringify(result))
//       console.log("results:::",  code["resp_code"])
//      if (code["resp_code"] == "000"){
     
//        this.router.navigateByUrl('/boxopened')
//      }
//      else{
//       const alert = await this.alertCtrl.create({
//         message: "Something went wrong. Please try again",
//         buttons: [
//           {
//             text: "Cancel",
//             role: "cancel",
//           },
//         ],
//       });
//       alert.present();
//      }
    
//     });

//     })
//     .catch(async (error)=>{
//       this.loadingCtrl.dismiss().then(async () => {
//       const alert = await this.alertCtrl.create({
//         message: "Something went wrong. Please try again",
//         buttons: [
//           {
//             text: "Cancel",
//             role: "cancel",
//           },
//         ],
//       });
//       alert.present();
//     });

//     })
//     const loading = await this.loadingCtrl.create();
//     loading.present();
   
//   }

 }










