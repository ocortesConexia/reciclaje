import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { LoadingProvider } from '../../Services/loading/loading';
import { GameService } from '../../Services/game.service';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { FirebaseAuthService } from '../../Services/auth/firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,public loading:LoadingProvider,
              public game:GameService,
              public alerts:AlertsProvider,
              private authService:FirebaseAuthService) {
  this.alerts.GameLevels(level=>{
    this.game.Play(level);
  });
   
   
  
  }
  goToRecicla(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }

  facebook(){
    this.authService.loginUser("ocortes@conexia.com","123456").then(success=>{
            console.log("asdasdsadasdsa",success);
    }).catch(e=>console.error(e))
  }

 
}
