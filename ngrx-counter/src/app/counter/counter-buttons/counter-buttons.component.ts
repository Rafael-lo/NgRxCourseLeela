import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();

  onIncrement(): void {
    this.increment.emit();
  }

  onDecrement(): void {
    this.decrement.emit();
  }

  onReset(): void {
    this.reset.emit();
  }
}
