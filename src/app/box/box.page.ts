import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApisService} from "../apis.service"
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from "@ionic/angular";

@Component({
  selector: 'app-box',
  templateUrl: './box.page.html',
  styleUrls: ['./box.page.scss'],
})
export class BoxPage implements OnInit {

  constructor(public alertCtrl: AlertController,public router: Router,public api: ApisService,public loadingCtrl: LoadingController) { }

  ngOnInit() {
   // this.openPortt()
  }


  recipient(box_num: any){
    console.log("box nume ", box_num)
    this.router.navigateByUrl('/recipient')
    localStorage.setItem("lockerNum", box_num)
    
  }

  toPayment(){
    this.router.navigateByUrl('/recipient')
  }

  


  async openPortt(){
   
    
    this.api.openPort().then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
       console.log("results:::", JSON.parse(JSON.stringify(result)))
      var code = JSON.parse(JSON.stringify(result))
      console.log("results:::",  code["resp_desc"])    
    
    });

    })
    const loading = await this.loadingCtrl.create();
    loading.present();
   
  }

}

