import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { userInterface } from '../../Interfaces/user';

@Injectable()
export class FirebaseService {
  user: Observable<firebase.User>;
  userData:userInterface

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private database:AngularFireDatabase
    ) {
    this.user = _firebaseAuth.authState;
  }

 
   registerUser(userData:userInterface, password:string){

    return this._firebaseAuth.auth.createUserWithEmailAndPassword( userData.email, password)
      .then(_=>{

      this._firebaseAuth.auth.signInWithEmailAndPassword(userData.email, password)
      .then(user=>{

        this.database.list('users').push(userData);
        Promise.resolve(user);
        this.userData=userData;
  
      })

    })
    .catch(err=>Promise.reject(err))

 }
 uploadImage( img:string,note:string,callback:Function){



   

      this.database.list('images').push({
        image:img,
        note:note,
        username:this.userData.name+" ("+this.userData.email.split('@')[0]+")",
        date:Math.floor(Date.now() / 1000)
      }).transaction(trans=>{
        console.log(trans);
      },_=>{
        callback(true);
      },true).then(data=>console.log(data))
      .catch(err=>{
        console.error(err);
        callback(false);
      })



}

  updatePoints(newPoints:number,newTime:number,callback:Function){

    this.database.list('users').query.orderByChild("email").equalTo(this.userData.email)
    .on("value",
    data=>{
      this.userData.bestGamePoints=newPoints;
      this.userData.bestGameTime=newTime;
      data.forEach((userDataFirebase)=>{

         this.database.list('users/'+userDataFirebase.key).update(userDataFirebase,this.userData)

        })    
    })
  }


 loginUser(email:string, password:string){

   return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
     .then(user=>{

       Promise.resolve(user);
       this.database.list('users').query.orderByChild("email").equalTo(email)
       .on("value",
       data=>{

        data.forEach((userDataFirebase)=>{

         this.userData=userDataFirebase.val();

        })
      })
      })
     .catch(err=>Promise.reject(err))
 }

 getReports(callback:Function){

  this.database.list('images').valueChanges()
  .subscribe(data=>{
    console.log(data);
    callback(data);
  });

 }

}

