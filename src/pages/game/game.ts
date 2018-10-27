import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { LoadingProvider } from '../../Services/loading/loading';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { FirebaseService } from '../../Services/auth/firebase';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GameComponent {

  gameCount:number=5;
  timeCount:number=10;
  gameInterval:any;
  points:number=0;
  fail:boolean=false;
  success:boolean=false;
  buttonDisabled:boolean=false;
  showImage:boolean=false;
  trash:any={
    trashType:1,
    trashImage:"assets/img/GvaiTdc0R9Oc1tOc2i6G_lata.jpg"
  }
  gameTrashArrayEasy=[
    {
    trashType:1,
    trashImage:"assets/img/ordinarios1.jpg"
  }, {
    trashType:1,
    trashImage:"assets/img/ordinarios2.jpg"
  }, {
    trashType:1,
    trashImage:"assets/img/ordinarios3.jpg"
  }, {
    trashType:1,
    trashImage:"assets/img/ordinarios4.jpg"
  }, {
    trashType:1,
    trashImage:"assets/img/ordinarios5.jpg"
  },{
    trashType:2,
    trashImage:"assets/img/papel1.jpg"
  },{
    trashType:2,
    trashImage:"assets/img/papel2.jpg"
  },{
    trashType:2,
    trashImage:"assets/img/papel3.jpg"
  },{
    trashType:2,
    trashImage:"assets/img/papel4.jpg"
  },{
    trashType:3,
    trashImage:"assets/img/plastico1.jpg"
  },{
    trashType:3,
    trashImage:"assets/img/plastico2.jpg"
  }];
  gameTrashArrayMedium=[
    {
      trashType:4,
      trashImage:"assets/img/metales1.jpg"
    },{
      trashType:4,
      trashImage:"assets/img/metales2.jpg"
    },{
      trashType:4,
      trashImage:"assets/img/metales3.jpg"
    },{
      trashType:4,
      trashImage:"assets/img/metales4.jpg"
    },{
      trashType:4,
      trashImage:"assets/img/metales5.jpg"
    },{
      trashType:4,
      trashImage:"assets/img/metales6.jpeg"
    },{
      trashType:4,
      trashImage:"assets/img/metales7.jpg"
    },{
      trashType:4,
      trashImage:"assets/img/metales8.jpg"
    }
  ];
  gameTrashArrayHard=[{
    trashType:5,
    trashImage:"assets/img/vidrio1.jpg"
  },{trashType:5,
  trashImage:"assets/img/vidrio2.jpg"
}];
  gameTrashArray=[];
  gameTime:number=0;
  gameTimeInterval=null;
  gameLevel:number=1;
  constructor(public navCtrl: NavController,
              public viewCrt: ViewController,
              public loader:LoadingProvider,
              public alerts:AlertsProvider,
              public navParams:NavParams,
              private firebase:FirebaseService) {
              this.gameLevel=  this.navParams.get("level");

              
              switch(this.gameLevel){
                case 1:
                this.gameTrashArray=  this.shuffleArray(this.gameTrashArrayEasy);
                break;
                case 2: 
                this.gameCount=10;
                this.gameTrashArray=  this.shuffleArray(this.gameTrashArrayMedium.concat(this.gameTrashArrayEasy));
                break;
                case 3:
                this.gameCount=15;
                this.gameTrashArray=  this.shuffleArray(this.gameTrashArrayHard.concat(this.gameTrashArrayEasy).concat(this.gameTrashArrayMedium));
                break;
              }
                
                
         
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
      let bestGame="";
      if(this.points*100>Number(this.firebase.userData.bestGamePoints) ||
       (this.points*100==Number(this.firebase.userData.bestGamePoints) && this.gameTime<(Number(this.firebase.userData.bestGameTime)))){
         bestGame="Nuevo Record!";
         this.firebase.updatePoints(this.points*100,
          this.gameTime,
          _=>{this.alerts.AlertOneButton("Error","Lo sentimos no pudimos actualizar tu puntaje")});
        }
         this.alerts.AlertOneButton("Juego terminado "+bestGame,
        "Puntos Aciertos: "+this.points*100+"<br>Tiempo: "+this.gameTime
        ,"Aceptar",
        _=>{
           
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
        this.success=true;
      }else{
         this.fail=true;
      }
    
      this.gameInterval=null;
      setTimeout(()=>{

        this.GamePlay();
        this.success=false;
        this.fail=false;
      },2000);
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
