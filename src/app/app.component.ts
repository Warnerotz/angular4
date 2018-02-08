import { Component } from '@angular/core';
import { EmpresaComponent } from './empresa/empresa.component';
import { NavComponent } from './nav/nav.component';



@Component({
  selector: 'pe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi super proyecto de angular4';
}
