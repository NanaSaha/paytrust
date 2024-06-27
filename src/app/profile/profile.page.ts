import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: any;
  fullname: any;
  phone: any;
  user_type: any;
  username: any;
  profile_pic: any;


  images: LocalFile[] = [];

  loginVal: any;;
  jsonBody: any;
  results_body = [];
  constructor(private http: HttpClient,
    private toastCtrl: ToastController,private plt: Platform,public alertCtrl: AlertController,public router: Router,public api: ApisService,public loadingCtrl: LoadingController) {
    
    this.email = localStorage.getItem("email")
    this.fullname = localStorage.getItem("fullname")
    this.phone =  localStorage.getItem("phone")
    this.user_type = localStorage.getItem("user_type")
    this.username = localStorage.getItem("username")
    this.profile_pic = localStorage.getItem("profile_pic")

    console.log("profile_pic", this.profile_pic)
    
   }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  edit(){
    this.router.navigateByUrl('/edit-profile')
  }

  invite(){
    this.router.navigateByUrl('/invite')
  }

  trans(){
    this.router.navigateByUrl('app/tabs/transhistory');
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
}
