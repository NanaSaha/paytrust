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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public signupForm: FormGroup;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  user_id: any;
  email: any;
  fullname: any;
  phone: any;
  params: any;

  constructor(  public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { 
    this.user_id = localStorage.getItem("user_id")
    this.fullname = localStorage.getItem("fullname")
    this.email = localStorage.getItem("email")
    this.phone = localStorage.getItem("phone")
    console.log("phone " + this.phone);

    this.signupForm = this._form.group(
      {
        email: [this.email, Validators.compose([Validators.required])],
        phone: [this.phone, Validators.compose([Validators.required])],
        fullname: [ this.fullname, Validators.compose([Validators.required])],
      
      
      },

    );
  }

  ngOnInit() {

    this.user_id = localStorage.getItem("user_id")
    this.fullname = localStorage.getItem("fullname")
    this.email = localStorage.getItem("email")
    this.phone = localStorage.getItem("phone")
    console.log("phone " + this.phone);
  }

  confirm(){
    this.router.navigateByUrl('/app/tabs/locker-type');
  }



  async update(){

   


    this.loginVal = JSON.stringify(this.signupForm.value);
    this.jsonBody = JSON.parse(this.loginVal);
    console.log("THIS IS THE login raw values VALUES" + this.loginVal);
    console.log("Email" + this.jsonBody.email);

    this.params = {
      "id": this.user_id,
      "email": this.jsonBody.email,
      "fullname": this.jsonBody.fullname,
      "phone": this.jsonBody.phone


    }

    console.log("THIS IS THE params VALUES" + this.params);
    
    this.api.update_profile(this.params).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
      console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["resp_code"])
     if (code["resp_code"] == "000"){

    
      localStorage.setItem("email",this.jsonBody.email)
      localStorage.setItem("fullname",this.jsonBody.fullname)
      localStorage.setItem("phone",this.jsonBody.phone)
     
      this.router.navigateByUrl('/app/tabs/locker-type');
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
