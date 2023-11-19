import { changeChannelName, customIncrement } from './../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  number!: number;
  value!: string;
  channelName$!: Observable<string>;

  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: this.number}));
  }

  changeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }

}
