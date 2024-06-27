
import { Router } from '@angular/router';
// import { Chart } from 'chart.js';
import { Chart } from 'chart.js/auto'
import { AfterViewInit, OnInit, Component, ElementRef, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApisService } from "../apis.service"
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { BarcodePage } from '../barcode/barcode.page';
import { BoxopenedPage } from '../boxopened/boxopened.page';

@Component({
  selector: 'app-transhistory',
  templateUrl: './transhistory.page.html',
  styleUrls: ['./transhistory.page.scss'],
})
export class TranshistoryPage implements OnInit {
  mySegment: string = "travelrequest";
  params: any;
  trans_list: any;
  user_id: any;
  resp_code: any;
  fullname: any;
  resp_code_pending: any;
  trans_list_pending: any;
  trans_list_joined: any;
  resp_code_joined: any;

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


  constructor(private modalCtrl: ModalController,public alertCtrl: AlertController, public router: Router, public _form: FormBuilder, public api: ApisService, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.user_id = localStorage.getItem("user_id")
    console.log("random_id", this.random_id)
    this.person_name =   localStorage.getItem("person_name");
  
    this.person_email =   localStorage.getItem("email");

    this.item_quantity =   localStorage.getItem("item_quantity");
    this.amount =   localStorage.getItem("amount");

    console.log("person_email:::", this.person_email)
    console.log("person_name:::", this.person_name)
    console.log("amount:::", this.amount)


    this.total = this.item_quantity * this.amount 

    this.transaction_buyer();
    this.transaction_pending();
    this.transaction_joined()
  }

  segmentChanged(){

  }

  async transaction_buyer() {

    this.params = {
      "user_id": this.user_id
    }

    this.api.retrieve_trans(this.params).then((result) => {

      // this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))
        console.log("results:::", code)

        this.resp_code = code[0].resp_code
        console.log("Resp code:::", this.resp_code)

        var results_body = result;
        this.trans_list = results_body
        console.log("trans_list", this.trans_list);
        console.log("trans_listlenght ", this.trans_list.length);
       
      // });

    })
      .catch(async (_error) => {
        // this.loadingCtrl.dismiss().then(async () => {
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
        // });

      })
    // const loading = await this.loadingCtrl.create();
    // loading.present();
  }



  async transaction_pending() {

    this.params = {
      "user_id": this.user_id
    }

    this.api.retrieve_trans_pending(this.params).then((result) => {

      // this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))
        console.log("results:::", code)

        this.resp_code_pending = code[0].resp_code
        console.log("Resp code:::", this.resp_code_pending)

        var results_body = result;
        this.trans_list_pending = results_body
        console.log("trans_list", this.trans_list_pending);
        console.log("trans_listlenght ", this.trans_list_pending.length);
       
      // });

    })
      .catch(async (_error) => {
        // this.loadingCtrl.dismiss().then(async () => {
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

      // })
    // const loading = await this.loadingCtrl.create();
    // loading.present();
  }


  async transaction_joined() {

    this.params = {
      "user_id": this.user_id
    }

    this.api.retrieve_trans_joined(this.params).then((result) => {

      // this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))
        console.log("results:::", code)
        
        if (code.length != 0){
          this.resp_code_joined = code[0].resp_code
          console.log("Resp code:::", this.resp_code_pending)
  
          var results_body = result;
          this.trans_list_joined = results_body
          console.log("trans_list", this.trans_list_joined);
          console.log("trans_listlenght ", this.trans_list_joined.length);

        }
        else{
          var results_body = result;
          this.trans_list_joined = results_body
          console.log("trans_list", this.trans_list_joined);
          console.log("trans_listlenght ", this.trans_list_joined.length);

        }
        
       
      // });

    })
      .catch(async (_error) => {
        // this.loadingCtrl.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: "No joined transaction. Something went wrong. Please try again",
            buttons: [
              {
                text: "Cancel",
                role: "cancel",
              },
            ],
          });
          alert.present();
        });

      // })
    // const loading = await this.loadingCtrl.create();
    // loading.present();
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

}
