import { CameraProvider } from './../../Services/camera/camera';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../Services/auth/firebase';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { LoadingProvider } from '../../Services/loading/loading';

@Component({
  selector: 'page-subir-incidente',
  templateUrl: 'subir-incidente.html'
})
export class SubirIncidentePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
 picture:string="";
 notes:string;
  constructor(public navCtrl: NavController,
    public navParams:NavParams,
    private firebase:FirebaseService,
    private camera:CameraProvider,
    private alerts:AlertsProvider,
    private loading:LoadingProvider) {

      this.picture="data:image/jpeg;base64,"+ this.navParams.get("picture");

  }



  upload() {
    this.loading.Normal("Subiendo imagen...");
    this.firebase.uploadImage(this.picture,
      this.notes,
      uploaded=>{
        this.loading.Hide();
        if(uploaded){
          this.alerts.AlertOneButton("Reporte","Reporte se subío correctamente.");
          this.navCtrl.pop();
        }
        else this.alerts.AlertOneButton("Error","No se pudo subir el reporte");
      }
    );
  }

  takePicture(){
    this.camera.TakePicture(picture=>{
      this.picture="data:image/jpeg;base64,"+picture;
    })
  }
}
