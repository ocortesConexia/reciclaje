import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdinariosPage } from '../ordinarios/ordinarios';
import { PapelCartonPage } from '../papel-carton/papel-carton';
import { PlSticoPage } from '../pl-stico/pl-stico';

@Component({
  selector: 'page-informaci-n',
  templateUrl: 'informaci-n.html'
})
export class InformaciNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToOrdinarios(params){
    if (!params) params = {};
    this.navCtrl.push(OrdinariosPage);
  }goToPapelCarton(params){
    if (!params) params = {};
    this.navCtrl.push(PapelCartonPage);
  }goToPlStico(params){
    if (!params) params = {};
    this.navCtrl.push(PlSticoPage);
  }
}
