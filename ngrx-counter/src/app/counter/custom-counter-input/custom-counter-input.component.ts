import { customIncrement } from './../state/counter.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {

  number!: number;

  constructor(private store: Store<{counter: {counter: number}}>) {}

  onAdd() {
    this.store.dispatch(customIncrement({value: this.number}));
  }

}
