import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { Empleado } from '../empleado/empleado';
import { EmpleadoComponent } from '../empleado/empleado.component';


@Component({
  selector: 'pe-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  public titulo: string;
  public empresa: Empresa;
  public trabajadores: Array<Empleado>;
  public jefe: Empleado;
  public empleado: Empleado;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;
  constructor() {}

  cambiarNombre(titulo) {
    this.titulo = titulo;
  }

  cambiarExterno(valor) {
    this.trabajador_externo = valor;
  }

  ngOnInit() {
    this.cambiarNombre('Ejemplo empresa desde ngOnInit');
    this.empresa = new Empresa('spBerner', 'asdaf', 'asafsfa', true);
    this.jefe = new Empleado('Adrian', 29, 'gerente', true);
    this.trabajadores = [
      new Empleado('juan', 25, 'frontEnd', true),
      new Empleado('Andres', 25, 'backEnd', true),
      new Empleado('Maria', 25, 'frontEnd', true),
      new Empleado('Lucia', 25, 'backEnd', true),
      new Empleado('Patricia', 25, 'frontEnd', true),
      new Empleado('Eduardo', 25, 'backEnd', true),


    ];
    (this.empleado = new Empleado('julian', 29, 'trabajador', true)),
      (this.trabajador_externo = false);
    this.color = 'green';
    this.color_seleccionado = 'red';
  }
}
