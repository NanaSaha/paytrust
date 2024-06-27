import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resendcode',
  templateUrl: './resendcode.page.html',
  styleUrls: ['./resendcode.page.scss'],
})
export class ResendcodePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  openBox(){
    this.router.navigateByUrl('/boxopened')
  }

}
