import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados: Empleado[] = [

        new Empleado("Jaime", "Díez", "Junior Developer", 1000),
        new Empleado("Laura", "Álvarez", "Presidente", 2700),
        new Empleado("Peter", "Alonso", "Senior Developer", 2500),
        new Empleado("Alonso", "Martinez", "Mid Developer", 1700),

    ];

    agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);
    }

}