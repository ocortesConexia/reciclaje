import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ordinarios',
  templateUrl: 'ordinarios.html'
})
export class OrdinariosPage {
  recicleInfo:any;
  constructor(public navCtrl: NavController,
              private params:NavParams) {
     this.recicleInfo=  this.params.get("pageInfo")
  }
  
}
