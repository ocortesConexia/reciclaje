import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular';

/*
  Generated class for the PopUpsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AlertsProvider {
  private waitingForDriver:any;
  private alert:any;
  constructor(public PopUp:AlertController) {
    console.log('Hello PopUpsProvider Provider');
    this.waitingForDriver=null;
  }

  AlertOneButton(title,template,buttonText?,callback?){
    let textButton="OK";
    if(buttonText!==undefined){
        textButton=buttonText;
    }
    this.alert = this.PopUp.create({
      title: title,
      subTitle: template,
      buttons: [{
        text: textButton,
        role: 'cancel',
        handler: () => {
          if(callback!==undefined){
            callback();
          }
        }
      }]
    });
    this.alert.present();
  }

  GameLevels(callback?){
    
   
    this.alert = this.PopUp.create({
      title: "Jugar",
      message:"Escoja el nivel del juego",
      buttons: [{
        text: "Facil",
      
        handler: () => {
          if(callback!==undefined){
            callback(1);
          }
        }
      },{
        text: "Medio",
       
        handler: () => {
          if(callback!==undefined){
            callback(2);
          }
        }
      },{
        text: "Dificil",
    
        handler: () => {
          if(callback!==undefined){
            callback(3);
          }
        }
      }]
    });
   
    this.alert.present();
  }

  AlertTowButtons(title,template,buttonText,callback,fail?) {
     this.alert = this.PopUp.create({
      title: title,
      message: template,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           if(fail!==undefined){
             fail();
           }
          }
        },
        {
          text: buttonText,
          handler: () => {
           callback();
          }
        }
      ]
    });
    this.alert.present();
  }

  CloseAlerts(){
    if(this.alert!==null){
      try{
        this.alert.dismiss();
        this.alert=null;
      }catch(e){
        console.log("Alert Error",e);
      }
     
    }
  }

 






  

 

  
}

