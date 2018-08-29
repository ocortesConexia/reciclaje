import { Injectable } from '@angular/core';

//import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the CameraProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CameraProvider {

  private options;

  constructor(
   // public camera: Camera
  ) {

   /* this.options= {
      quality: 50,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }*/
  }
/*
  async TakePicture(callback){
    try{
      await this.camera.cleanup().then(()=>console.log('Clean Up'));
    }catch(e){
      console.log('Camera Error ',e);
    }
  
    this.camera.getPicture(this.options).then((ImgUri) => {

     callback(ImgUri);
     

    }, (err) => {
       console.log(err);
    });
  }

*/

}
