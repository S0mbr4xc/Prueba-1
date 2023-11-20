import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Tarea } from 'src/app/domain/tarea';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {
  tarea: Tarea = new Tarea();
  private path = '/tareas';
  tareas: AngularFirestoreCollection<any>
  constructor(private router: Router, private bd: AngularFirestore){
    this.tareas = bd.collection(this.path)
    this.tareas.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  save(){
    
  }

  getAll(){
    this.tareas.valueChanges()
  }
}
