import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import Swiper from 'swiper';

//import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
//import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from "@ionic/angular";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public router: Router,public alertCtrl: AlertController,) { }

  ngOnInit() {

 
    const swiper = new Swiper('.swiper', {
    
      // If we need pagination
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
      },
      allowTouchMove: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
   
    });

 
  }

  login(){
    // this.router.navigateByUrl('/login')
    this.router.navigate(['/login'])
  }

  signup(){
    this.router.navigate(['/signup'])
    
  }

  Resident(){
    this.router.navigate(['/qrcode'])
  }


  async  google(){
    const alert = await this.alertCtrl.create({
      message: "Not Available yet",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
    alert.present();

  }

}
