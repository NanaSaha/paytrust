
import {Router} from '@angular/router';
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


@Component({
  selector: 'app-boxopened',
  templateUrl: './boxopened.page.html',
  styleUrls: ['./boxopened.page.scss'],
})
export class BoxopenedPage implements OnInit {

  params: any;
  trans_list: any;
  email;
  resp_code: any;
  transId: any;

  constructor(private modalCtrl: ModalController,public alertCtrl: AlertController, public router: Router, public _form: FormBuilder, public api: ApisService, public loadingCtrl: LoadingController) {


    this.email = localStorage.getItem("email")
   }

  ngOnInit() {

    this.transaction_buyer();
  }


  async transaction_buyer() {

    this.params = {
      "person_email": this.email
    }

    this.api.retrieve_trans_pending_email(this.params).then((result) => {

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




  radioGroupChange(event: any) {
    this.transId = event.detail.value
    console.log('Selected value:', this.transId);
    // Do something with the selected value
  }

  join(){
    console.log("transaction_id::", this.transId)
    this.modalCtrl.dismiss(null, 'cancel');
    localStorage.setItem("transaction_id", this.transId)
    this.router.navigateByUrl('/transaction-preview')
  }

  

}










