import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformaciNPage } from '../informaci-n/informaci-n';
import { GameService } from '../../Services/game.service';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { FirebaseService } from '../../Services/auth/firebase';
import { userInterface } from '../../Interfaces/user';

@Component({
  selector: 'page-recicla',
  templateUrl: 'recicla.html'
})
export class ReciclaPage {

  userData:userInterface;
 
  constructor(public navCtrl: NavController,
              public game:GameService,
              private alerts:AlertsProvider,
              private firebase:FirebaseService) {
                
                this.userData=this.firebase.userData;
  }

  playGame(){
    
   this.alerts.GameLevels(level=>{
      this.game.Play(level);
    });

  }

  goToInformaciN(){
    
    this.navCtrl.push(InformaciNPage);

  }
 
}
