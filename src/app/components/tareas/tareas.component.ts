import { Component, OnInit } from '@angular/core';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea[] = []
  nombreTarea = ''
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {

   //crear un objeto tarea
   const tarea: Tarea = {
    nombre: this.nombreTarea,
    estado: false
   }
   //agregar el objeto tarea al array
   this.listTareas.push(tarea);
   //resetear el input(form)
   this.nombreTarea = '';
  }
  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);
  }
  actualizarTarea(  index: number, tarea: Tarea ): void{
    this.listTareas[index].estado = !tarea.estado
  }
}
