import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-writable',
  imports: [],
  templateUrl: './signal-writable.html',
  styleUrl: './signal-writable.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SignalWritable {
  counter = signal(0);
  counterWritable: WritableSignal<number> = signal(0);



  normalCounter = 0;
  // counter : WritableSignal<number> = signal(0);

  constructor() {
    this.counter.set(5);
    // setTimeout(()=>{
    //   // this.normalCounter = 50;
    //   this.counter.set(30);
    //   console.log("counter Value => " + this.counter());
    // },5000)

    effect(() => console.log("The value of counter is : " + this.counter()))
  }
  onIncrement() {
    this.counter.update(initialValue => initialValue + 1);
  }
}
