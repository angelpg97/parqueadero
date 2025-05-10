import { Component } from '@angular/core';
import { NavbarStatusService } from '../../service/navbar-status.service';

@Component({
  selector: 'app-navegador-vertical',
  standalone: true,
  imports: [],
  templateUrl: './navegador-vertical.component.html',
  styleUrl: './navegador-vertical.component.scss'
})
export class NavegadorVerticalComponent {
  public showNavbar: boolean;
  constructor(private navBarState:NavbarStatusService){
    this.showNavbar=false;
    this.navBarState.showNavbar$.subscribe((show) => {
      this.showNavbar = show;
    });
  }

  public toggleNavbar() {
    this.showNavbar = !this.showNavbar;
    this.navBarState.changeState(this.showNavbar);
  }
}
