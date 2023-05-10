import { Component } from '@angular/core';
import { Empleado } from './empleado.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  empleados: Empleado[] = [

    new Empleado("Jaime", "Díez", "Junior Developer", 1000),
    new Empleado("Laura", "Álvarez", "Presidente", 2700),
    new Empleado("Peter", "Alonso", "Senior Developer", 2500),
    new Empleado("Alonso", "Martinez", "Mid Developer", 1700),

  ];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
    
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
}
