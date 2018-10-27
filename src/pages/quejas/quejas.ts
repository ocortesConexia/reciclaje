import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComentariosPage } from '../comentarios/comentarios';
import { FirebaseService } from '../../Services/auth/firebase';

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html'
})
export class QuejasPage {

  reports=[];


  constructor(public navCtrl: NavController,
    private firebase:FirebaseService
    ) {
  }
  goToComentarios(params){
    if (!params) params = {};
    this.navCtrl.push(ComentariosPage);
  }
  ionViewWillEnter(){
  this.firebase.getReports(reports=>{
    this.reports=reports;
  });

  }
}
