import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navegador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.scss'
})
export class NavegadorComponent {
  public desactivarLateral:boolean;

  constructor(){
    this.desactivarLateral=false;
  }

  public ocultar():void {
    this.desactivarLateral=true;
  }
}
