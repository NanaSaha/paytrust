import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-success',
  templateUrl: './withdraw-success.page.html',
  styleUrls: ['./withdraw-success.page.scss'],
})
export class WithdrawSuccessPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  home(){
  
    this.router.navigateByUrl('/app/tabs/locker-type');
  }

}
