import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { LoadingProvider } from '../../Services/loading/loading';
import { GameService } from '../../Services/game.service';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { FirebaseAuthService } from '../../Services/auth/firebase';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private registerForm : FormGroup;

  constructor(public navCtrl: NavController,
              public loading:LoadingProvider,
              private viewCrt:ViewController,
              public game:GameService,
              public alerts:AlertsProvider,
              private authService:FirebaseAuthService,
              private formBuilder: FormBuilder) {
                this.registerForm = this.formBuilder.group({
                  email: ['', [Validators.required,Validators.email]],
                  password: ['',[Validators.required,Validators.minLength(6)]],
                  passwordConfirmation:['',[Validators.required,Validators.minLength(6)]],
                });

      
  }


  
  dismiss(){
    this.viewCrt.dismiss({
      didRegister:false});
  }
 

  register(){
    this.authService.registerUser(this.registerForm.value.email,this.registerForm.value.password)
    .then(_=>{
      this.viewCrt.dismiss({
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        didRegister:true});
    }).catch(_=>{
       this.alerts.AlertOneButton("Error","No se pudo registrar");
    });
  }

 
}
