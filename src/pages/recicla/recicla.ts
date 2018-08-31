import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformaciNPage } from '../informaci-n/informaci-n';
import { OrdinariosPage } from '../ordinarios/ordinarios';
import { PapelCartonPage } from '../papel-carton/papel-carton';
import { PlSticoPage } from '../pl-stico/pl-stico';
import { GameService } from '../../Services/game.service';
import { AlertsProvider } from '../../Services/alerts/alerts';

@Component({
  selector: 'page-recicla',
  templateUrl: 'recicla.html'
})
export class ReciclaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,
              public game:GameService,
              private alerts:AlertsProvider) {
  }
  playGame(params){
    this.alerts.GameLevels(level=>{
      this.game.Play(level);
    })
  }
  goToInformaciN(){
    
    this.navCtrl.push(InformaciNPage);
  }
 
}
