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
  selector: 'app-recipient',
  templateUrl: './recipient.page.html',
  styleUrls: ['./recipient.page.scss'],
})
export class RecipientPage implements OnInit {
  recipients: any;
  person_name: any;
  ammount: any = 0;
  funds: any = 0;
  amount: any; 
  total: any;
  item_quantity: any;
  person_email: any;
  public public_key = "pk_live_caabde47a485606dc025e27220d3c03548aa40f2"; //Put your paystack Test or Live Key here
  public channels = ["bank", "card", "ussd", "qr", "mobile_money"]; //Paystack Payment Methods
  //public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  public random_id = `ref-${Math.ceil(Math.random() * 10e13)}`;

  constructor(public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { }

  ngOnInit() {

  
  
    console.log("random_id", this.random_id)
    this.person_name =   localStorage.getItem("person_name");
  
    this.person_email =   localStorage.getItem("email");

    this.item_quantity =   localStorage.getItem("item_quantity");
    this.amount =   localStorage.getItem("amount");


    this.total = this.item_quantity * this.amount 
  }

  payment(){
  

    this.router.navigateByUrl('/app/tabs/locker-type');
  }



  async paymentInit() {
    console.log("Payment initialized");
  }

  async paymentDone(ref: any) {
    console.log("RESPNSE AFTER PAYMENT" + JSON.stringify(ref));
  

    // this.ph.UpdatePaymentType(2, this.sub_options);

    let reference = ref.reference;
    let trans = ref.trans;
    let status = ref.status;
  

  
    if (status == "success") {
      this.router.navigateByUrl('/app/tabs/locker-type');
     
    }
    else {
          }


  }

  async paymentCancel() {
    this.router.navigateByUrl('/app/tabs/locker-type');
   
  }




  async retrieve_reci(){
   
    
    this.api.retrieve_recipient().then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
       console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["user_details"])

       this.recipients = code["user_details"]
    
    
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

  home(){
    this.router.navigateByUrl('/app/tabs/locker-type');
  }

}
