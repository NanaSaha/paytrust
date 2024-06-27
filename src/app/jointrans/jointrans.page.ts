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
  selector: 'app-jointrans',
  templateUrl: './jointrans.page.html',
  styleUrls: ['./jointrans.page.scss'],
})

export class JointransPage implements OnInit {

  mySegment: string = "travelrequest";
  slideOpts = {
    slidesPerView: 2.8,
    initialSlide: 0,
    speed: 400,
  };
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(){

  }

}

