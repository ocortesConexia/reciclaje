import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComentariosPage } from '../comentarios/comentarios';

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html'
})
export class QuejasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToComentarios(params){
    if (!params) params = {};
    this.navCtrl.push(ComentariosPage);
  }
}
