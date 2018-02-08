import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'pe-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public empleados: Array<Empleado>;


  constructor() {

  }

  ngOnInit() {
    this.empleados = [
      new Empleado('juan', 25, 'frontEnd', true),
      new Empleado('Andres', 25, 'backEnd', true),
      new Empleado('Maria', 25, 'frontEnd', true),
      new Empleado('Lucia', 25, 'backEnd', true),
      new Empleado('Patricia', 25, 'frontEnd', true),
      new Empleado('Eduardo', 25, 'backEnd', true),

    ];
  }
}
