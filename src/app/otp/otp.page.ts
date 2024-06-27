import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  showPhone: boolean = true;
  showOtpComponent = false;

  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "*",
    inputStyles: {
      width: "50px",
      height: "50px",
      background: "white"
    },
  };

  otp: any;
  PhoneNo: any;

  CountryCode: any;
  showOTPInput: boolean = false;
 
  showEmail: boolean = false;
  showButton: boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

 onOtpChange(otp: string | any[]) {
      this.otp = otp;
      // When all 6 digits are filled, trigger OTP validation method
      if (otp.length == 6) {
        this.validateOtp(otp);
      }
    }

    async validateOtp(otp: any) {

      this.router.navigateByUrl('/app/tabs/locker-type');
  
    // this.authProvider.enterVerificationCode(otp).then(async (userData) => {
    //   console.log(userData);
      
    //   this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
    //     console.log("USER PROFILE:: ", userProfileSnapshot.val());
    //     const user_details = userProfileSnapshot.val();
    //     console.log("USER PROFILE user_details:: ", user_details);
    //     if (user_details == null) {
    //       let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //           from_phone: "yes",
    //         },
    //       };
    //       // this.navCtrl.navigateRoot("update-users-info");
    //       this.navCtrl.navigateRoot(["update-users-info"], navigationExtras);
    //     } else {
    //       console.log("Im home");
    //       this.ngZone.run(() => {
    //         this.navCtrl.navigateRoot("home");
    //       });

    //     }
    //   });
    
    // });
    
  }


    signinWithPhoneNumber($event: any) {
    
    this.CountryCode = "+233"

    console.log("PhoneNo", this.PhoneNo, this.CountryCode);

            this.showOtpComponent = true;
            this.showPhone = false;
          

      // if (this.PhoneNo && this.CountryCode) {
      //   this.authProvider
      //     .signInWithPhoneNumber(
      //       this.recaptchaVerifier,
      //       this.CountryCode + this.PhoneNo
      //     )
      //     .then((success) => {
      //       this.showOtpComponent = true;
      //       this.showPhone = false;
      //       this.showEmail = false;
      //       this.showButton = true;
      //     });
      // } else {
      //   this.pop.presentToast("Error! SMS couldnt be sent. Please try again");
      // }

  }

}
