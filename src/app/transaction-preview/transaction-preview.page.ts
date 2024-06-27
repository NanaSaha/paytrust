
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
  selector: 'app-transaction-preview',
  templateUrl: './transaction-preview.page.html',
  styleUrls: ['./transaction-preview.page.scss'],
})

export class TransactionPreviewPage implements OnInit {
  trans_vals: any;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  params: any;
  trans_list: any;
  f_trans_list: any;
  user_type: any;
  transaction_id: any;
  resp_code: any;
  

  constructor(  public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) {

    this.user_type =localStorage.getItem("user_type")
    this.transaction_id =  localStorage.getItem("transaction_id")
    console.log("User Type::", this.user_type )
   }

  ngOnInit() {
    this.retrieve_trans();
    // var buyer_id = localStorage.getItem("buyer_id"); 
    // console.log("buyer_id " + buyer_id);
  }

  async join(){

    
    this.params ={    
      "transaction_id":  this.transaction_id
    }

    this.api.join_buyer(this.params).then((result) => {

      this.loadingCtrl.dismiss().then(async () => {
      
        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))

      
       if (code["resp_code"] == "200"){
        
        this.router.navigateByUrl('/success');
       }
       else{
        const alert = await this.alertCtrl.create({
          message: "Transaction Not Valid",
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
      .catch(async (_error) => {
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
    // this.router.navigateByUrl('qrcode');
    this.router.navigateByUrl('/cancel');
  }


  async retrieve_trans(){



    this.params ={    
      "transaction_id":  this.transaction_id
    }

    this.api.retrieve_trans_with_transId(this.params).then((result) => {

      this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))
        console.log("results:::", code)

        this.resp_code = code[0].resp_code
        console.log("Resp code:::", this.resp_code)

        var results_body = result;
        this.trans_list = results_body
        console.log("trans_list", this.trans_list);
        console.log("trans_listlenght ", this.trans_list.length);
       
      });

    })
      .catch(async (_error) => {
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

