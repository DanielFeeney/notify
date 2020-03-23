import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, LoadingController, Platform } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  images = [];

  constructor(
    // private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    // private actionSheetController: ActionSheetController, private toastController: ToastController,
    // private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    // private ref: ChangeDetectorRef, private filePath: FilePath
    ) { }
 
  ngOnInit() {
    // this.plt.ready().then(() => {
    //   this.loadStoredImages();
    // });
  }

  // createFileName() {
  //   var d = new Date(),
  //       n = d.getTime(),
  //       newFileName = n + ".jpg";
  //   return newFileName;
  // }
 
  // copyFileToLocalDir(namePath, currentName, newFileName) {
  //     this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
  //         this.updateStoredImages(newFileName);
  //     }, error => {
  //         this.presentToast('Error while storing file.');
  //     });
  // }
 
  // updateStoredImages(name) {
  //     this.storage.get(STORAGE_KEY).then(images => {
  //         let arr = JSON.parse(images);
  //         if (!arr) {
  //             let newImages = [name];
  //             this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
  //         } else {
  //             arr.push(name);
  //             this.storage.set(STORAGE_KEY, JSON.stringify(arr));
  //         }
  
  //         let filePath = this.file.dataDirectory + name;
  //         let resPath = this.pathForImage(filePath);
  
  //         let newEntry = {
  //             name: name,
  //             path: resPath,
  //             filePath: filePath
  //         };
  
  //         this.images = [newEntry, ...this.images];
  //         this.ref.detectChanges(); // trigger change detection cycle
  //     });
  // }
 
  // loadStoredImages() {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //     if (images) {
  //       let arr = JSON.parse(images);
  //       this.images = [];
  //       for (let img of arr) {
  //         let filePath = this.file.dataDirectory + img;
  //         let resPath = this.pathForImage(filePath);
  //         this.images.push({ name: img, path: resPath, filePath: filePath });
  //       }
  //     }
  //   });
  // }
 
  // pathForImage(img) {
  //   if (img === null) {
  //     return '';
  //   } else {
  //     let converted = this.webview.convertFileSrc(img);
  //     return converted;
  //   }
  // }
 
  // async presentToast(text) {
  //   const toast = await this.toastController.create({
  //       message: text,
  //       position: 'bottom',
  //       duration: 3000
  //   });
  //   toast.present();
  // }

  // async selectImage() {
  //     const actionSheet = await this.actionSheetController.create({
  //         header: "Select Image source",
  //         buttons: [{
  //                 text: 'Load from Library',
  //                 handler: () => {
  //                     this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //                 }
  //             },
  //             {
  //                 text: 'Use Camera',
  //                 handler: () => {
  //                     this.takePicture(this.camera.PictureSourceType.CAMERA);
  //                 }
  //             },
  //             {
  //                 text: 'Cancel',
  //                 role: 'cancel'
  //             }
  //         ]
  //     });
  //     await actionSheet.present();
  // }
  
  // takePicture(sourceType: PictureSourceType) {
  //     var options: CameraOptions = {
  //         quality: 100,
  //         sourceType: sourceType,
  //         saveToPhotoAlbum: false,
  //         correctOrientation: true
  //     };
  
  //     this.camera.getPicture(options).then(imagePath => {
  //         if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
  //             this.filePath.resolveNativePath(imagePath)
  //                 .then(filePath => {
  //                     let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
  //                     let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
  //                     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //                 });
  //         } else {
  //             var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
  //             var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  //             this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //         }
  //     });
  
  // }

}
