import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }



  gohome(){
    this.router.navigateByUrl('/app/tabs/locker-type');
  }

}
