import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {

  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id'];

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    
  }

  empleados: Empleado[] = [];


  volverHome(){
    this.router.navigate([""])
  }


  actualizarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.actualizarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number | undefined;

}
