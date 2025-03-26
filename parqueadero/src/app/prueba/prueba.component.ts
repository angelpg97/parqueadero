import { Component } from '@angular/core';
import { NavegadorComponent } from '../../public/navegador/navegador.component';
import { NavegadorVerticalComponent } from '../../public/navegador-vertical/navegador-vertical.component';
import { IndexComponent } from "../../public/index/index.component";
import { RegistroComponent } from "../../public/registro/registro.component";
import { EstacionamientoComponent } from "../../public/estacionamiento/estacionamiento.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagoComponent } from "../../public/pago/pago.component";
import { InterfazeInicioComponent } from "../interfaze-inicio/interfaze-inicio.component";

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavegadorComponent, NavegadorVerticalComponent, IndexComponent, RegistroComponent, EstacionamientoComponent, PagoComponent, InterfazeInicioComponent],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent {

}
