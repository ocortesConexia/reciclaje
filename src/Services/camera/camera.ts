import { Injectable } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera';


@Injectable()
export class CameraProvider {

  private options:CameraOptions;

  constructor(
    public camera: Camera
  ) {

    this.options= {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }

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



}
