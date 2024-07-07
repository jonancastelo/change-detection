import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Level3Component } from '../level-3/level-3.component';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-level-2',
  standalone: true,
  imports: [Level3Component],
  templateUrl: './level-2.component.html',
  styleUrl: './level-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Level2Component {
  private counterService = inject(CounterService);

  get counter() {
    return this.counterService.counter;
  }

  increaseCounter() {
    this.counterService.increaseCounter();
  }
}
