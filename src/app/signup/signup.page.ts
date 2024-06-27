import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ApisService} from "../apis.service"
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController,
  ToastController
} from "@ionic/angular";

const IMAGE_DIR = 'stored-images';

interface LocalFile {
	name: string;
	path: string;
	data: string;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  images: LocalFile[] = [];

  public signupForm: FormGroup;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  constructor( private http: HttpClient,
 private toastCtrl: ToastController,private plt: Platform,public alertCtrl: AlertController,public router: Router,public _form: FormBuilder,public api: ApisService,public loadingCtrl: LoadingController) { 

    this.signupForm = this._form.group(
      {
        email: ["", Validators.compose([Validators.required])],
        phone: ["", Validators.compose([Validators.required])],
        fullname: ["", Validators.compose([Validators.required])],
        password: ["", Validators.compose([Validators.required])],
        location: ["", Validators.compose([Validators.required])],
        
      
      },

    );
  }

  ngOnInit() {
    this.loadFiles();

 
     const lastItem = this.images[0]
  
  }

  login(){
    this.router.navigateByUrl('/login')
  }

  async loadFiles() {
		this.images = [];

		const loading = await this.loadingCtrl.create({
			message: 'Loading data...'
		});
		await loading.present();

		Filesystem.readdir({
			path: IMAGE_DIR,
			directory: Directory.Data
		})
			.then(
				(result) => {
					this.loadFileData(result.files.map((x) => x.name));
				},
				async (err) => {
					// Folder does not yet exists!
					await Filesystem.mkdir({
						path: IMAGE_DIR,
						directory: Directory.Data
					});
				}
			)
			.then((_) => {
				loading.dismiss();
			});
	}

  // Get the actual base64 data of an image
	// base on the name of the file
	async loadFileData(fileNames: string[]) {
		for (let f of fileNames) {
			const filePath = `${IMAGE_DIR}/${f}`;

			const readFile = await Filesystem.readFile({
				path: filePath,
				directory: Directory.Data
			});

			this.images.push({
				name: f,
				path: filePath,
				data: `data:image/jpeg;base64,${readFile.data}`
			});
		}
	}

	// Little helper
	async presentToast(text: any) {
		const toast = await this.toastCtrl.create({
			message: text,
			duration: 3000
		});
		toast.present();
	}

  async selectImage() {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt // Camera, Photos or Prompt!
    });

    if (image) {
        this.saveImage(image)
    }
}

// Create a new file from a capture image
async saveImage(photo: Photo) {
  const base64Data = await this.readAsBase64(photo);



  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
      directory: Directory.Data
  });

  


  // Reload the file list
  // Improve by only loading for the new image and unshifting array!
  this.loadFiles();
}

  // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
  private async readAsBase64(photo: Photo) {
    if (this.plt.is('hybrid')) {
        const file = await Filesystem.readFile({
            path: `${photo.path}`
        });

        return file.data;
    }
    else {
        //Fetch the photo, read as a blob, then convert to base64 format
        const response = await fetch(`${photo.webPath}`);
        const blob = await response.blob();

        return await this.convertBlobToBase64(blob) as string;
    }
}

// Helper function
convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});


async startUpload(file: any) {
  
  const response = await fetch(file.data);
 
 const blob = await response.blob();



  const formData = new FormData();
  formData.append('file', blob, file.name);


  
  // this.uploadData(formData);
}

// Upload the formData to our API
// async uploadData(formData: FormData) {
//   const loading = await this.loadingCtrl.create({
//       message: 'Uploading image...',
//   });
//   await loading.present();

//   // Use your own API!
//   const url = 'http://localhost:8888/images/upload.php';

//   this.http.post(url, formData)
//       .pipe(
//           finalize(() => {
//               loading.dismiss();
//           })
//       )
//       .subscribe(res => {
//           // if (res['success']) {
//           //     this.presentToast('File upload complete.')
//           // } else {
//           //     this.presentToast('File upload failed.')
//           // }
//       });
// }


  async signup(file: any){
    
   

    this.loginVal = JSON.stringify(this.signupForm.value);
    this.jsonBody = JSON.parse(this.loginVal);
    const formData = new FormData();

    if (file != undefined){

      const response = await fetch(file.data);
 
      const blob = await response.blob();

     
  
     // this.jsonBody['profile_pic'] = file.name;
     
      formData.append('file', blob, file.name);
      formData.append('profile_pic', file.name );
      console.log("formData", formData)

    }

   

    
    formData.append('fullname', this.jsonBody.fullname );
    formData.append('email', this.jsonBody.email );
    formData.append('phone', this.jsonBody.phone );
    formData.append('password', this.jsonBody.password );
    formData.append('location', this.jsonBody.location );
   
   
    console.log("formData", formData)
  
    
    // this.api.signup(this.jsonBody).then((result)=>{

    this.api.signup(formData).then((result)=>{
 
      this.loadingCtrl.dismiss().then(async () => {
      
    
      var code = JSON.parse(JSON.stringify(result))
      
     if (code["resp_code"] == "000"){
     
      //this.router.navigateByUrl('/verification')
      this.router.navigateByUrl('/login')
     }
     else{
      const alert = await this.alertCtrl.create({
        message: "Something went wrong. Please try again",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      });
      alert.present();
     }
    
    });

    })
    .catch(async (error)=>{
      this.loadingCtrl.dismiss().then(async () => {
      const alert = await this.alertCtrl.create({
        message: "Something went wrong. Please try again",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      });
      alert.present();
    });

    })
    const loading = await this.loadingCtrl.create();
    loading.present();
   
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
