import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { LoadingProvider } from '../../Services/loading/loading';
import { GameService } from '../../Services/game.service';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { FirebaseAuthService } from '../../Services/auth/firebase';
import { ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private loginForm : FormGroup;

  constructor(public navCtrl: NavController,
              public loading:LoadingProvider,
              public game:GameService,
              public alerts:AlertsProvider,
              private authService:FirebaseAuthService,
              private formBuilder: FormBuilder,
              private modalCtrl: ModalController) {
              this.loginForm = this.formBuilder.group({
                  email: ['', [Validators.required,Validators.email]],
                  password: ['',[Validators.required,Validators.minLength(6)]],
                });

           }

  Register(){
    
      let registerModal = this.modalCtrl.create(RegisterPage);
      registerModal.present();
      registerModal.onDidDismiss(data=>{
            console.log(data);
            this.navCtrl.setRoot(TabsControllerPage,{
              userName:data.email.split("@")[1]
            }); 
      });
    
  }

  login(){
    this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password)
    .then(_=>{
     this.navCtrl.setRoot(TabsControllerPage,{
      userName:this.loginForm.value.email.split("@")[1]
    });
    }).catch(_=>{
       this.alerts.AlertOneButton("Error","Correo o contraseñas incorrectos.");
    });
  }

 
}
