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
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  public signupForm: FormGroup;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  role;
  constructor(  public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { 

   this.role = localStorage.getItem("role")
   console.log("Role::", this.role )

    this.signupForm = this._form.group(
      {
        person_name: ["", Validators.compose([Validators.required])],
        person_email: ["", Validators.compose([Validators.required])],
        item_name: ["", Validators.compose([Validators.required])],
        item_quantity: ["", Validators.compose([Validators.required])],
        amount: ["", Validators.compose([Validators.required])],
        description: ["", Validators.compose([Validators.required])],
      
      
      },

    );
  }

  ngOnInit() {
  }

  fromTrans(){
    this.router.navigateByUrl('/box')
  }



  // async signup(){
  //   this.loginVal = JSON.stringify(this.signupForm.value);
  //   this.jsonBody = JSON.parse(this.loginVal);
  //   console.log("THIS IS THE login raw values VALUES" + this.loginVal);
  //   console.log("JOSN BODY" + this.jsonBody);
    
  //   this.api.signup(this.jsonBody).then((result)=>{
 
  //     this.loadingCtrl.dismiss().then(async () => {
      
  //     console.log("results:::", JSON.parse(JSON.stringify(result)))
  //     var code = JSON.parse(JSON.stringify(result))
  //     console.log("results:::",  code["resp_code"])
  //    if (code["resp_code"] == "000"){
     
  //     //this.router.navigateByUrl('/verification')
  //     this.router.navigateByUrl('/login')
  //    }
  //    else{
  //     const alert = await this.alertCtrl.create({
  //       message: "Something went wrong. Please try again",
  //       buttons: [
  //         {
  //           text: "Cancel",
  //           role: "cancel",
  //         },
  //       ],
  //     });
  //     alert.present();
  //    }
    
  //   });

  //   })
  //   .catch(async (error)=>{
  //     this.loadingCtrl.dismiss().then(async () => {
  //     const alert = await this.alertCtrl.create({
  //       message: "Something went wrong. Please try again",
  //       buttons: [
  //         {
  //           text: "Cancel",
  //           role: "cancel",
  //         },
  //       ],
  //     });
  //     alert.present();
  //   });

  //   })
  //   const loading = await this.loadingCtrl.create();
  //   loading.present();
   
  // }


  seller(){
 
    this.loginVal = JSON.stringify(this.signupForm.value);
    this.jsonBody = JSON.parse(this.loginVal);
    console.log("THIS IS THE login raw values VALUES" + this.loginVal);
  
   
    console.log("JOSN BODY" + this.jsonBody);
    console.log("JOSN BODY" + this.jsonBody.person_name);
    localStorage.setItem("trans_values", this.jsonBody);
    localStorage.setItem("person_name", this.jsonBody.person_name);
    localStorage.setItem("email", this.jsonBody.person_email);
    localStorage.setItem("item_name", this.jsonBody.item_name);
    localStorage.setItem("item_quantity", this.jsonBody.item_quantity);
    localStorage.setItem("amount", this.jsonBody.amount);
    localStorage.setItem("description", this.jsonBody.description);

   

 
     this.router.navigateByUrl('buyer-details');
     
     
  }

}

