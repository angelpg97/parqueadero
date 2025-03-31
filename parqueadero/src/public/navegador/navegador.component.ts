import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';

@Component({
  selector: 'app-navegador',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.scss'
})
export class NavegadorComponent {
  public desactivarLateral:boolean;
    //Rutas Navbar
    public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path);

  constructor(){
    this.desactivarLateral=false;
  }


  public ocultar():void {
    this.desactivarLateral=true;
  }
}
