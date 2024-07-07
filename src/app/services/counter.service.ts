import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _counter = 0;

  increaseCounter() {
    this._counter++;
  }

  get counter() {
    return this._counter;
  }
}
