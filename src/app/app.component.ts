import { ChangeDetectorRef, Component, NgZone, inject } from '@angular/core';
import { Level1Component } from './level-1/level-1.component';
import { CounterService } from './services/counter.service';
import {
  BehaviorSubject,
  Observable,
  Subject,
  delay,
  interval,
  map,
  subscribeOn,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Level1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private counterService = inject(CounterService);
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  asyncVariable = 0;

  get counter() {
    return this.counterService.counter;
  }

  constructor() {
    // this.ngZone.runOutsideAngular(() => {
    // setInterval(() => {
    //   console.log('ASYNC VARIABLE CHANGE');
    //   this.asyncVariable++;
    // }, 4000);
    // });
    // const asyncPromise = new Promise<number>((resolve, reject) => {
    //   this.ngZone.runOutsideAngular(() => {
    //     try {
    //       setTimeout(() => {
    //         resolve(this.asyncVariable + 1);
    //       }, 2000);
    //     } catch (error) {
    //       reject(error);
    //     }
    //   });
    // });
    // asyncPromise.then((newAsyncVariable) => {
    //   this.asyncVariable = newAsyncVariable;
    // });
    // const asyncObservable = new Observable<number>((observer) => {
    //   this.ngZone.runOutsideAngular(() => {
    //     try {
    //       setTimeout(() => {
    //         observer.next(this.asyncVariable + 1);
    //         observer.complete();
    //       }, 5000);
    //     } catch (error) {
    //       observer.error(error);
    //     }
    //   });
    // });
    // asyncObservable.subscribe({
    //   next: (newAsyncVariable) => {
    //     this.asyncVariable = newAsyncVariable;
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('Observable completed');
    //   },
    // });
    // const asyncObservable = interval(2000);
    // asyncObservable.subscribe({
    //   next: () => {
    //     this.asyncVariable += 1;
    //     console.log('Set asyncVariable:', this.asyncVariable);
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('Observable completed');
    //   },
    // });
  }

  increaseCounter() {
    this.counterService.increaseCounter();
  }
}
