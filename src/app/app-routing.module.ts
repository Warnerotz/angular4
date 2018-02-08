import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EmpresaComponent} from './empresa/empresa.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
    {path: ' ', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    { path: 'home', component: HomeComponent},
    {path: 'empresa', component: EmpresaComponent},
    {path: 'empleado', component: EmpleadoComponent},
    // {path: '**', component: HomeComponent},
  ];

 export const appRoutingProviders: any[] = [];
// export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

