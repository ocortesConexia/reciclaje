import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { LoadingProvider } from '../../Services/loading/loading';
import { AlertsProvider } from '../../Services/alerts/alerts';
import { FirebaseService } from '../../Services/auth/firebase';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { userInterface } from '../../Interfaces/user';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private registerForm : FormGroup;

  constructor(
              private loading:LoadingProvider,
              public viewCrt:ViewController,
              private alerts:AlertsProvider,
              private authService:FirebaseService,
              private formBuilder: FormBuilder
              ) {

                this.registerForm = this.formBuilder.group({
                  email: ['', [Validators.required,Validators.email]],
                  name:['', [Validators.required,Validators.minLength(3)]],
                  lastName:['', [Validators.required,Validators.minLength(3)]],
                  age:['', [Validators.required,Validators.max(100)]],
                  phoneNumber:['', [Validators.required,Validators.min(999999999),Validators.max(9999999999)]],
                  password: ['',[Validators.required,Validators.minLength(6)]],
                  passwordConfirmation:['',[Validators.required,Validators.minLength(6)]],
                });


  }






  register(){
    this.loading.Normal("Realizando registro...");
    let userData:userInterface={
      email:this.registerForm.value.email,
      name:this.registerForm.value.name,
      lastName:this.registerForm.value.lastName,
      age:this.registerForm.value.age,
      phoneNumber:this.registerForm.value.phoneNumber,
      bestGamePoints:0,
      bestGameTime:0
    }

    this.authService.registerUser(userData,this.registerForm.value.password)
    .then(_=>{

      this.loading.Hide();
      this.viewCrt.dismiss(true);
      this.alerts.AlertOneButton("Registro","Registro exitoso gracias por utilizar ReciclApp");

    })
    .catch(error=>{
      this.loading.Hide();
      if(error.code== "auth/email-already-in-use")this.alerts.AlertOneButton("Error","El correo ya esta en uso.");
      else this.alerts.AlertOneButton("Error","No se pudo registrar.");


    });
  }


}
