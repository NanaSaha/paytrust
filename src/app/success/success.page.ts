import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }



  toPayment(){
    this.router.navigateByUrl('app/tabs/transhistory');
  }

  cancle(){
    this.router.navigateByUrl('/app/tabs/locker-type');
  }

}












