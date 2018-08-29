import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { GameComponent } from '../pages/game/game';
import { LoadingProvider } from './loading/loading';
 
@Injectable()
export class GameService {
  
  gamesLevels={
    FACIL:1,
    MEDIO:2,
    Dificil:3
  }
  constructor(private modalCtrl: ModalController,public loader:LoadingProvider) {
   
  }

 
  Play(level:number){
    let profileModal = this.modalCtrl.create(GameComponent,
      { level: level }
     );
    profileModal.present();
  }
 
  
}