import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InterfazeInicioComponent } from './interfaze-inicio/interfaze-inicio.component';
import { PruebaComponent } from './prueba/prueba.component';
import { LoginNuevoComponent } from './login-nuevo/login-nuevo.component';
import path from 'node:path';
import { RegistroComponent } from '../public/registro/registro.component';
import { EstacionamientoComponent } from '../public/estacionamiento/estacionamiento.component';

export const routes: Routes = [
    {title:'Login',
      path:'login',
      component:LoginComponent
    },
    {
     title:'',
     path:'',
     component:PruebaComponent,
     children:[
      {
        path:'registro',
        title:'registro',
        component:RegistroComponent
      },
      {
        path:'estacionamiento',
        title:'estacionamiento',
        component:EstacionamientoComponent
      }
     ]
    },
    {
     title:'login-Nuevo',
     path:'login-Nuevo',
     component:LoginNuevoComponent
    }
];
