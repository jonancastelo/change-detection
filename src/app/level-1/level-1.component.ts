import { Component, inject } from '@angular/core';
import { Level2Component } from '../level-2/level-2.component';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-level-1',
  standalone: true,
  imports: [Level2Component],
  templateUrl: './level-1.component.html',
  styleUrl: './level-1.component.css',
})
export class Level1Component {
  private counterService = inject(CounterService);

  get counter() {
    return this.counterService.counter;
  }

  increaseCounter() {
    this.counterService.increaseCounter();
  }
}
