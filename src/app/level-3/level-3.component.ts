import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-level-3',
  standalone: true,
  imports: [],
  templateUrl: './level-3.component.html',
  styleUrl: './level-3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Level3Component {
  private counterService = inject(CounterService);

  get counter() {
    return this.counterService.counter;
  }

  increaseCounter() {
    this.counterService.increaseCounter();
  }
}
