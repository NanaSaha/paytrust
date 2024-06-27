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
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.page.html',
  styleUrls: ['./buyer-details.page.scss'],
})
export class BuyerDetailsPage implements OnInit {
  trans_vals: any;
  public buyerForm: FormGroup;
  loginVal: any;
  jsonBody: any;
  results_body = [];
  params: any;

  person_name: any;
  person_email: any;
  item_name: any;
  item_quantity: any;
  amount: any;
  description: any;
  total: any;
  user_id: any;

  constructor(  public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { 

    this.buyerForm = this._form.group(
      {
        buyer_name: ["", Validators.compose([Validators.required])],
        buyer_email: ["", Validators.compose([Validators.required])],
        buyer_phone_number: ["", Validators.compose([Validators.required])],
        fees: ["10"],
        paid_by: ["", Validators.compose([Validators.required])],
      
      
      },

    );
  }

  ngOnInit() {

   
    this.person_email =   localStorage.getItem("email");
    this.person_name =   localStorage.getItem("person_name");
    this.item_name =   localStorage.getItem("item_name");
    this.item_quantity =   localStorage.getItem("item_quantity");
    this.amount =   localStorage.getItem("amount");
    this.description =   localStorage.getItem("description");

    this.total = this.item_quantity * this.amount 

    this.user_id =  localStorage.getItem("user_id");

 
     console.log("Total " + this.total );
     console.log("user_id " + this.user_id );
  }


  async confirm(){




    this.params ={
      "person_name": this.person_name,
      "person_email": this.person_email,
      "amount": this.amount,
      "fees": "0",
      "item_name": this.item_name,
      "item_description":  this.description,
      "item_quantity":  this.item_quantity,
      "user_id": this.user_id,
      "status": "pending"

    }

    console.log("Trans Params:", this.params )

    this.api.save_trans(this.params).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
      console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["resp_code"])
     if (code["resp_code"] == "000"){
     
      
      this.router.navigateByUrl('/box')
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
   

    
 
  }

  cancle(){
    this.router.navigateByUrl('transaction');
  }

}



