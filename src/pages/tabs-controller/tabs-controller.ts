import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportarPage } from '../reportar/reportar';
import { ReciclaPage } from '../recicla/recicla';
import { QuejasPage } from '../quejas/quejas';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ReportarPage;
  tab2Root: any = ReciclaPage;
  tab3Root: any = QuejasPage;
  
  constructor(
    public navCtrl: NavController
              ) {

               
  }

  
  
}
