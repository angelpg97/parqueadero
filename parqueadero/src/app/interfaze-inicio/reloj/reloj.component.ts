import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ClockService } from '../../../service/clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.scss'
})
export class RelojComponent implements OnInit, OnDestroy {
  currentTime$ = this.clockService.getTime();
  currentDate$ = this.clockService.getDate();
  private dateSubscription?: Subscription;

  fecha: Date = new Date();

  constructor(private clockService: ClockService) {
    this.dateSubscription = this.currentDate$.subscribe(
      date => this.fecha = date
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.dateSubscription?.unsubscribe();
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
