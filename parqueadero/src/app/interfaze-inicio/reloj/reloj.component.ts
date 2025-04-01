import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.scss'
})
export class RelojComponent implements OnInit, OnDestroy {
  fecha: Date = new Date();
  currentTime: string;
  private timerInterval: any;

  constructor() {
    this.currentTime = this.fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }

  ngOnInit() {
    this.actualizarHora();
    this.timerInterval = setInterval(() => {
      this.actualizarHora();
    }, 60000); // 60000 ms = 1 minuto
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  actualizarHora() {
    this.fecha = new Date();
    this.currentTime = this.fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  get day(): string {
    return this.fecha.getDate().toString().padStart(2, '0');
  }

  get month(): string {
    return (this.fecha.getMonth() + 1).toString().padStart(2, '0');
  }

  get year(): string {
    return this.fecha.getFullYear().toString();
  }
}
