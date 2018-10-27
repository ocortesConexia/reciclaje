import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubirIncidentePage } from '../subir-incidente/subir-incidente';
import { CameraProvider } from '../../Services/camera/camera';

@Component({
  selector: 'page-reportar',
  templateUrl: 'reportar.html'
})
export class ReportarPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,public camera:CameraProvider) {
  }
  goToSubirIncidente(){
    this.camera.TakePicture(picture=>{
      this.navCtrl.push(SubirIncidentePage,{picture:picture});
    })


  }
}
