import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { LoginNuevoComponent } from './login-nuevo/login-nuevo.component';
import { RegistroComponent } from '../public/registro/registro.component';
import { EstacionamientoComponent } from '../public/estacionamiento/estacionamiento.component';
import { PagoComponent } from '../public/pago/pago.component';
import { MainComponent } from './main/main.component';
import { InterfazeInicioComponent } from './interfaze-inicio/interfaze-inicio.component';
import { IngresoVehiculosComponent } from './ingreso-vehiculos/ingreso-vehiculos.component';

export const routes: Routes = [
  { title: 'Login', path: 'login', component: LoginComponent },
  {
    title: 'main',
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        title: 'Inicio',
        component: InterfazeInicioComponent,
      },
      {path:'ingreso-vehiculos',
        title:'Ingreso Vehiculos',
        component:IngresoVehiculosComponent
      }
      ,
      {
        path: 'registro',
        title: 'Registro Vehiculos',
        component: RegistroComponent,
      },
      {
        path: 'estacionamiento',
        title: 'estacionamiento',
        component: EstacionamientoComponent,
      },
      {
        path: 'pagos',
        title: 'Pagos',
        component: PagoComponent,
      },
    ],
  },
  {
    title: 'login-Nuevo',
    path: 'login-Nuevo',
    component: LoginNuevoComponent,
  },
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'login',
  },
];
