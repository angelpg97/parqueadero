import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private currentDate = new BehaviorSubject<Date>(new Date());

  constructor() {
    interval(1000).subscribe(() => {
      this.currentDate.next(new Date());
    });
  }

  getTime(): Observable<string> {
    return this.currentDate.asObservable().pipe(
      map(date => date.toLocaleTimeString('es-ES', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).toLowerCase())
    );
  }

  getDate(): Observable<Date> {
    return this.currentDate.asObservable();
  }
}
