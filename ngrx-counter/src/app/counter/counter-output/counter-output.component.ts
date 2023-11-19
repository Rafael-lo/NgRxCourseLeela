import { initialState } from './../state/counter.state';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<number>;

  constructor(private store: Store<{counter: {counter: number}}>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }


}
