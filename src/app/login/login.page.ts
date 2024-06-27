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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  constructor(  public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { 

    this.loginForm = this._form.group(
      {
        email: ["", Validators.compose([Validators.required])],
        password: ["", Validators.compose([Validators.required])]
      
      },

    );
  }

  ngOnInit() {
  }

  // async login(){
  //   //  this.router.navigateByUrl('/app/tabs/locker-type');
  //    this.router.navigateByUrl('/otp');
  // }

  async login(){

  

    this.loginVal = JSON.stringify(this.loginForm.value);
    this.jsonBody = JSON.parse(this.loginVal);
    console.log("THIS IS THE login raw values VALUES" + this.loginVal);
    console.log("JOSN BODY" + this.jsonBody);
    
    this.api.login(this.jsonBody).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
      console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))

      console.log("USer EMail:::", code["user_details"][0].email)
    
     if (code["resp_code"] == "117"){
      
      localStorage.setItem("user_id",code["user_details"][0].id)
      localStorage.setItem("email",code["user_details"][0].email)
      localStorage.setItem("fullname",code["user_details"][0].fullname)
      localStorage.setItem("phone",code["user_details"][0].phone)
      localStorage.setItem("profile_pic",code["user_details"][0].profile_pic)
      

     
      this.router.navigateByUrl('/app/tabs/locker-type');
     }
     else{
      const alert = await this.alertCtrl.create({
        message: "Incorrect Email or Password",
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
        message: "Incorrect Email or Password",
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

  signup(){
    this.router.navigateByUrl('/signup')
  }

  

}
