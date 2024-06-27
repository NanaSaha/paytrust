

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
  selector: 'app-seller-details',
  templateUrl: './seller-details.page.html',
  styleUrls: ['./seller-details.page.scss'],
})
export class SellerDetailsPage implements OnInit {
  trans_vals: any;
  public signupForm: FormGroup;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  params: any;
  constructor(  public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { 

    this.signupForm = this._form.group(
      {
        seller_name: ["", Validators.compose([Validators.required])],
        seller_email: ["", Validators.compose([Validators.required])],
        seller_phone_number: ["", Validators.compose([Validators.required])],
        fees: ["10"],
        paid_by: ["", Validators.compose([Validators.required])],
      
      
      },

    );
  }

  ngOnInit() {
  
    var title=   localStorage.getItem("title");
     var name = localStorage.getItem("name");
     var item_type = localStorage.getItem("item_type");
     var amount =  localStorage.getItem("amount");
     var description = localStorage.getItem("description");
 
     console.log("title " + title , "name "+ name);
  }



  async signup(){
    this.loginVal = JSON.stringify(this.signupForm.value);
    this.jsonBody = JSON.parse(this.loginVal);
    console.log("THIS IS THE login raw values VALUES" + this.loginVal);
    console.log("JOSN BODY" + this.jsonBody);
    
    this.api.signup(this.jsonBody).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
      console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["resp_code"])
     if (code["resp_code"] == "000"){
     
      //this.router.navigateByUrl('/verification')
      this.router.navigateByUrl('/login')
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


  // seller(){
 
  //   this.loginVal = JSON.stringify(this.signupForm.value);
  //   this.jsonBody = JSON.parse(this.loginVal);
  //   console.log("THIS IS THE login raw values VALUES" + this.loginVal);
  //   console.log("Title" + this.jsonBody.title);
   
  //   console.log("JOSN BODY" + this.jsonBody);
  //   localStorage.setItem("trans_values", this.jsonBody);
  //   localStorage.setItem("title", this.jsonBody.title);
  //   localStorage.setItem("name", this.jsonBody.name);
  //   localStorage.setItem("item_type", this.jsonBody.item_type);
  //   localStorage.setItem("amount", this.jsonBody.amount);
  //   localStorage.setItem("description", this.jsonBody.description);
  //    this.router.navigateByUrl('seller-details');
  // }


  async preview(){

    var title=   localStorage.getItem("title");
    var name = localStorage.getItem("name");
    var item_type = localStorage.getItem("item_type");
    var amount =  localStorage.getItem("amount");
    var description = localStorage.getItem("description");
    var buyer_id = localStorage.getItem("buyer_id"); 

    this.loginVal = JSON.stringify(this.signupForm.value);
    this.jsonBody = JSON.parse(this.loginVal);
    console.log("THIS IS THE login raw values VALUES" + this.loginVal);
    console.log("seller_name" + this.jsonBody.seller_name);
    console.log("seller_email" + this.jsonBody.seller_email);
    console.log("seller_phone_number" + this.jsonBody.seller_phone_number);
    console.log("fees" + this.jsonBody.fees);
    console.log("paid_by" + this.jsonBody.paid_by);
    console.log("title " + title , "name "+ name);
    console.log("buyer_id " + buyer_id);


    this.params ={
      "seller_name": this.jsonBody.seller_name,
      "seller_email": this.jsonBody.seller_email,
      "seller_phone": this.jsonBody.seller_phone_number,
      "amount": amount,
      "fees": this.jsonBody.fees,
      "item_name": name,
      "item_description": description,
      "transaction_title": title,
      "paid_by": this.jsonBody.paid_by,
      "buyer_id": buyer_id,
      "status": "pending"

    }




    this.api.save_trans(this.params).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
      console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["resp_code"])
     if (code["resp_code"] == "000"){
     
      
      this.router.navigateByUrl('/transaction-preview')
      const alert = await this.alertCtrl.create({
        message: "Transaction Successfully Created",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      });
      alert.present();
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
   

    
  //this.router.navigateByUrl('transaction-preview');
  }

}


