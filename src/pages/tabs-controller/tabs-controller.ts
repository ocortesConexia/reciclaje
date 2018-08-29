import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportarPage } from '../reportar/reportar';
import { ReciclaPage } from '../recicla/recicla';
import { QuejasPage } from '../quejas/quejas';
import { GameService } from '../../Services/game.service';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ReportarPage;
  tab2Root: any = ReciclaPage;
  tab3Root: any = QuejasPage;
  constructor(public navCtrl: NavController,
              public game:GameService) {

               // this.game.Play(2);
  }

  
  
}
