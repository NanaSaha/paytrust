import { Component, OnInit } from '@angular/core';
import { Camera,CameraSource, CameraResultType } from '@capacitor/camera';
import {
  Plugins,
  Capacitor,
} from "@capacitor/core";
import {
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
} from "@angular/core";
import {Router} from '@angular/router';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  type = 'front';

  @Output() imagePick = new EventEmitter<string | File>();
  @Input() showPreview = false;
  selectedImage: any;
  selectedImage2: any;
  selectedImage3: any;
  usePicker = false;
  
  constructor(public router: Router) { 

    console.log("Selected Image",this.selectedImage)
      }

  ngOnInit() {
  }

  next(){
    this.type = 'back'
  }

  next2(){
    this.type = 'selfie'
  }

  login(){
    this.router.navigateByUrl('/login')
  }




  uploadback(){
    console.log("pick Image")
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      allowEditing: true,
      width: 300,
      resultType: CameraResultType.Base64,
    })
      .then((image) => {
        console.log(image.base64String);
       this.selectedImage2 = "data:image/jpeg;base64, " + image.base64String;
        this.imagePick.emit(image.base64String);
       
      })
      .catch((error) => {
        console.log(error);
        if (this.usePicker) {
          
        }
        return false;
      });
  }
    
  

  uploadSelfie(){
    console.log("pick Image")
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      allowEditing: true,
      width: 300,
      resultType: CameraResultType.Base64,
    })
      .then((image) => {
        console.log(image.base64String);
       this.selectedImage3 = "data:image/jpeg;base64, " + image.base64String;
        this.imagePick.emit(image.base64String);
       
      })
      .catch((error) => {
        console.log(error);
        if (this.usePicker) {
          
        }
        return false;
      });
  }


  onPickImage() {
   console.log("pick Image")
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      allowEditing: true,
      width: 300,
      resultType: CameraResultType.Base64,
    })
      .then((image) => {
        console.log(image.base64String);
       this.selectedImage = "data:image/jpeg;base64, " + image.base64String;
        this.imagePick.emit(image.base64String);
       
      })
      .catch((error) => {
        console.log(error);
        if (this.usePicker) {
          
        }
        return false;
      });
  }




}
