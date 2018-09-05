import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComentariosPage } from '../comentarios/comentarios';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs-compat';
import { map } from 'rxjs-compat/operators/map';

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html'
})
export class QuejasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;
  songs: AngularFireList<any>;

  constructor(public navCtrl: NavController,
    public database: AngularFireDatabase,
    ) {
  }
  goToComentarios(params){
    if (!params) params = {};
    this.navCtrl.push(ComentariosPage);
  }
  ionViewDidEnter(){
  

  
    
    

    this.tasksRef = this.database.list('usuarios');
    this.tasksRef.push({
      alias: "prueba54",
apellidos: 
"cortes medinaasdsad",
edad: 
27,
nombre:"asdasdsadsa"
    })
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  /*  this.tasksRef.push({
      title: "Nueva tarea",
      done: false
    });*/
  }
}
