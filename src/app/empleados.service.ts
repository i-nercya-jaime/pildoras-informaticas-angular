import { Empleado } from "./empleado.model";

export class EmpleadosService{

    empleados: Empleado[] = [

        new Empleado("Jaime", "Díez", "Junior Developer", 1000),
        new Empleado("Laura", "Álvarez", "Presidente", 2700),
        new Empleado("Peter", "Alonso", "Senior Developer", 2500),
        new Empleado("Alonso", "Martinez", "Mid Developer", 1700),

    ];

    agregarEmpleadoServicio(empleado: Empleado){
        this.empleados.push(empleado);
    }



}