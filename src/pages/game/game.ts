import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { LoadingProvider } from '../../Services/loading/loading';
import { AlertsProvider } from '../../Services/alerts/alerts';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GameComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  gameCount:number=5;
  timeCount:number=10;
  gameInterval:any;
  points:number=0;
  buttonDisabled:boolean=false;
  showImage:boolean=false;
  trash:any={
    trashType:1,
    trashImage:"assets/img/GvaiTdc0R9Oc1tOc2i6G_lata.jpg"
  }
  gameTrashArray=[{
    trashType:1,
    trashImage:"assets/img/lata.jpg"
  },{
    trashType:2,
    trashImage:"assets/img/servilletaLimpia.jpg"
  },{
    trashType:3,
    trashImage:"assets/img/desechosComida.jpg"
  },{
    trashType:1,
    trashImage:"assets/img/servilletaSucia.jpg"
  },{
    trashType:1,
    trashImage:"assets/img/periodico.jpg"
  }];
  gameTime:number=0;
  gameTimeInterval=null;
  gameLevel:number=1;
  constructor(public navCtrl: NavController,
              public viewCrt: ViewController,
              public loader:LoadingProvider,
              public alerts:AlertsProvider,
              public navParams:NavParams) {
              this.gameLevel=  this.navParams.get("level");

              console.log("Level "+this.gameLevel);
              
                this.gameTrashArray=  this.shuffleArray(this.gameTrashArray);
         
  }

  ionViewDidLoad(){
    this.loader.BeginPlay(_=>{
       this.gameTimeInterval=setInterval(()=>{
          this.gameTime+=10;
       },10);
       this.GamePlay();
    });

  }

  GamePlay(){
    this.timeCount=10;
    this.gameCount--;
    if(this.gameCount==-1){
      clearInterval(this.gameTimeInterval);
      this.gameTime-=10;
      console.log(this.gameTime);
      this.gameTime=this.gameTime/1000;
         this.alerts.AlertOneButton("Juego terminado",
        "Puntos Aciertos: "+this.points*100+"<br>Puntos tiempo: "+this.gameTime
        ,"Aceptar",()=>{
          this.viewCrt.dismiss();
        });
         
    }else{

    
    
    this.trash=this.gameTrashArray[this.gameCount];
    console.log(this.trash);
    this.showImage=true;
    this.buttonDisabled=false;
    this.gameInterval= setInterval(()=>{
      this.timeCount--;
      if(this.timeCount==0){
         this.Answer(0);
       //  alert("Fallo!");
        // this.GamePlay();
      }
    },1000);
  }
     
  }

  Answer(trashId){
    if(!this.buttonDisabled){
      this.buttonDisabled=true;
      clearInterval(this.gameInterval);
      if(this.trash.trashType==trashId){
        this.points++;
      }
    
      this.gameInterval=null;
      setTimeout(()=>{
        this.GamePlay();
      },500);
    }
    
   

  }

 

   shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
  
}
