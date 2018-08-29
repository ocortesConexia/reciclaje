import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseAuthService {
  user: Observable<firebase.User>;
  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }



  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

   // Registro de usuario
   registerUser(email:string, password:string){
    return this._firebaseAuth.auth.createUserWithEmailAndPassword( email, password)
      .then((res)=>{
      this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    })
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
 }

 // Login de usuario
 loginUser(email:string, password:string){
   return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
     .then(user=>Promise.resolve(user))
     .catch(err=>Promise.reject(err))
 }

 // Logout de usuario
 logout(){
   this._firebaseAuth.auth.signOut().then(()=>{
     // hemos salido
   })
 }

// Devuelve la session
 get Session(){
  return this._firebaseAuth.authState;
 }

   
}

