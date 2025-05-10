import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';
import { NavbarStatusService } from '../../service/navbar-status.service';

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

  constructor(private navbarState:NavbarStatusService){
    this.desactivarLateral=false;
    this.navbarState.showNavbar$.subscribe((show)=>{
      this.desactivarLateral=show;
    });
  }

  public ocultar():void {
    this.desactivarLateral = !this.desactivarLateral;
    this.navbarState.changeState(this.desactivarLateral);
  }
}
