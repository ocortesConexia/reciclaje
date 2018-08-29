import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubirIncidentePage } from '../subir-incidente/subir-incidente';

@Component({
  selector: 'page-reportar',
  templateUrl: 'reportar.html'
})
export class ReportarPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToSubirIncidente(params){
    if (!params) params = {};
    this.navCtrl.push(SubirIncidentePage);
  }
}
