import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformaciNPage } from '../informaci-n/informaci-n';
import { OrdinariosPage } from '../ordinarios/ordinarios';
import { PapelCartonPage } from '../papel-carton/papel-carton';
import { PlSticoPage } from '../pl-stico/pl-stico';
import { GameService } from '../../Services/game.service';

@Component({
  selector: 'page-recicla',
  templateUrl: 'recicla.html'
})
export class ReciclaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,
              public game:GameService) {
  }
  playGame(params){
    this.game.Play(1);
  }
  goToInformaciN(params){
    if (!params) params = {};
    this.navCtrl.push(InformaciNPage);
  }goToOrdinarios(params){
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
