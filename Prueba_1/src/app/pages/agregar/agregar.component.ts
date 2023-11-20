import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/domain/tarea';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {
  tarea: Tarea = new Tarea();
  private path = '/tareas';
  constructor(private router: Router, ){

  }
}
