import { Component } from '@angular/core';
import { NavegadorVerticalComponent } from '../../public/navegador-vertical/navegador-vertical.component';
import { NavegadorComponent } from '../../public/navegador/navegador.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavegadorVerticalComponent,NavegadorComponent,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
