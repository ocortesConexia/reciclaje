import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html'
})
export class ComentariosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;
  constructor(public navCtrl: NavController,
    public database: AngularFireDatabase
  ) {
  }
  ionViewDidEnter(){
    this.tasksRef = this.database.list('tasks');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.tasksRef.push({
      title: "Nueva tarea",
      done: false
    });
  }
 
  
}
