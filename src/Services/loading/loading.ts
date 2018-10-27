import { Injectable } from '@angular/core';

import { LoadingController } from 'ionic-angular';
//import {createTranslateLoader} from "../../app/app.module";

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  loader=null;
  ErrorCode:any;
  timeOutInstance:any;
  constructor(public loading: LoadingController) {
    
  }
  Normal(Message?,SecondsToDismiss?,callback?){

    
    clearTimeout(this.timeOutInstance);
     let template=Message;
    if(Message===undefined){
      template="";
    } 
    if(this.loader===null){
      this.loader = this.loading.create({
        spinner: 'ios',
        cssClass:"background: transparent",
        content: template,
    });

      this.loader.present().then(() => {
      if(SecondsToDismiss===undefined){

      }else{

       
        setTimeout( ()=> {

        this.Hide();
        if(callback!==undefined){
          callback();
        }


        },SecondsToDismiss*1000)
      }
        });
    }else{
      this.loader.data.content=template;
    }
     
  }


  BeginPlay(callback){
    let counter=3;
    let counInterval=setInterval(()=>{
     
      switch(counter){
        case 0:
        this.Normal("Listo!");
       
        break;
        case -1:
        this.Normal("A jugar!");
      
        break;
        case -2:
        this.Hide();
        clearInterval(counInterval);
        callback();
        break;
        default:
        this.Normal(counter);
       
        break;
      }
      counter--;
      
       
    },1000);
  }


 



  Hide(SecondsToDismiss?,callback?){

    if(SecondsToDismiss===undefined){
      if(this.loader!==null){
        try{
          this.loader.dismiss();
          this.loader=null;
        }catch(e){
          console.log('err ',e);
        }
       
      }

    }else{

      
     this.timeOutInstance= setTimeout( ()=> {
        if(callback!==undefined){
          callback();
        }

        if(this.loader!==undefined){
          try{
            this.loader.dismiss();
            this.loader=undefined;
          }catch(e){
            console.log('err 1',e);
          }
        }




      },SecondsToDismiss*1000)
    }
  }











}
