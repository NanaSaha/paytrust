import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }


  home(){
    this.router.navigateByUrl('/app/tabs/locker-type')
  }

  resendcode(){
    this.router.navigateByUrl('/resendcode')
  }

}















