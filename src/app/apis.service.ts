import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class ApisService {
  base_url = "https://escrow.devdexsoftware.com";
  login_url = this.base_url + "/login";
  sendEmail = this.base_url + "/send_email";
  signup_url = this.base_url + "/sign_up";
  update_profile_url = this.base_url + "/update_profile";
  recipient_url = this.base_url + "/retrieve_recipients";
  openPort_url =  this.base_url + "/open_serialPort";
  open_single_box_url =  this.base_url + "/open_single_box";
  sms_url =  this.base_url + "/sendMsg";
 save_trans_url = this.base_url + "/save_transactions";
 save_seller_trans_url = this.base_url + "/save_seller_transactions";
 retrieve_trans_url = this.base_url + "/retrieve_user_transactions";
 retrieve_trans_pending_url = this.base_url + "/retrieve_transactions_pending";
 retrieve_trans_joined_url = this.base_url + "/retrieve_transactions_joined";

 retrieve_trans_pending_email_url = this.base_url + "/retrieve_transactions_pending_with_person_email";



 retrieve_seller_trans_url =  this.base_url + "/retrieve_seller_transactions";

 retrieve_trans_id_url = this.base_url + "/retrieve_transactions_with_transId";

 join_seller_trans_url = this.base_url + "/join_seller_transactions";
 join_buyer_trans_url = this.base_url + "/join_buyer_transactions";


 retrieve_join_seller_trans_url = this.base_url + "/retrieve_join_seller_transactions";
 retrieve_join_buyer_trans_url = this.base_url + "/retrieve_join_buyer_transactions";

  open_box_url =  this.base_url + "/open_locker";
  
  data: any;
  
  constructor(private http: HttpClient) { }


  login(_data: any){
    return new Promise((resolve, reject) => {
      const apiUrl = this.login_url;
      this.http.post(this.login_url, _data).subscribe(
        
         (res)=>{
          console.log("RESOLVED:::", resolve(res))
          return resolve(res)
        },
       (err: any)=>{
          reject(err)
        },)
    // return promise;
  })
  
} 

send_Email(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.sendEmail, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})
}



signup(_data: any){
  return new Promise((resolve, reject) => {
   
    this.http.post(this.signup_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 


update_profile(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.update_profile_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 


save_trans(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.save_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 


save_seller_trans(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.save_seller_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 




retrieve_trans(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}


retrieve_trans_pending(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_trans_pending_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}



retrieve_trans_joined(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_trans_joined_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}

retrieve_trans_pending_email(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_trans_pending_email_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}












retrieve_trans_with_transId(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_trans_id_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}

join_seller(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.join_seller_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}


join_buyer(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.join_buyer_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}



retrieve_join_seller(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_join_seller_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}


retrieve_join_buyer(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_join_buyer_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

}




retrieve_seller_trans(_data: any){
  return new Promise((resolve, reject) => {
    const apiUrl = this.login_url;
    this.http.post(this.retrieve_seller_trans_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 








retrieve_recipient(){
  return new Promise((resolve, reject) => {
    
    this.http.get(this.recipient_url).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 



openPort(){
  return new Promise((resolve, reject) => {
    
    this.http.get(this.openPort_url).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
})

} 



openSingleBox(_data: any){
  return new Promise((resolve, reject) => {
    this.http.post(this.open_single_box_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 


openBox(_data: any){
  return new Promise((resolve, reject) => {
    this.http.post(this.open_box_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 



sendSms(_data: any){
  return new Promise((resolve, reject) => {
    this.http.post(this.sms_url, _data).subscribe(
      
       (res)=>{
        console.log("RESOLVED:::", resolve(res))
        return resolve(res)
      },
     (err: any)=>{
        reject(err)
      },)
  // return promise;
})

} 



}
