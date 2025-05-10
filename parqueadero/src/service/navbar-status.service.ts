import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarStatusService {

  private showNavbar=new BehaviorSubject<boolean>(false);
  showNavbar$=this.showNavbar.asObservable();
  constructor() { }

  changeState(show: boolean) {
    this.showNavbar.next(show);
    console.log("Navbar status changed to: ", show);
  }
}
