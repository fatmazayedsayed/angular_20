import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-linked',
  imports: [],
  templateUrl: './signal-linked.html',
  styleUrl: './signal-linked.scss'
})
export class SignalLinked {
  quantitySignal = signal(1);
  price = 10;
  // total = computed(()=>{
  //   return this.quantitySignal() * this.price;
  // })

  // total = linkedSignal(()=>{
  //   return this.quantitySignal() * this.price;
  // })

  total = linkedSignal({
    source: this.quantitySignal,
    computation: () => this.quantitySignal() * this.price,
  })

  calculate() {
    this.quantitySignal.set(10);
  }
}
