import { Component } from '@angular/core';
import { NavegadorComponent } from '../../public/navegador/navegador.component';
import { RelojComponent } from './reloj/reloj.component';

@Component({
  selector: 'app-interfaze-inicio',
  standalone: true,
  imports: [NavegadorComponent,RelojComponent],
  templateUrl: './interfaze-inicio.component.html',
  styleUrl: './interfaze-inicio.component.scss'
})
export class InterfazeInicioComponent {

}
