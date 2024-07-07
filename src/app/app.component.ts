import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Level1Component } from './level-1/level-1.component';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Level1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private counterService = inject(CounterService);

  get counter() {
    return this.counterService.counter;
  }

  increaseCounter() {
    this.counterService.increaseCounter();
  }
}
