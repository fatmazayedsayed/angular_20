import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectiveNgForVsFor } from './directives/structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for';
import { StructuralDirectiveNgSwitch } from './directives/structural-directive-ng-switch/structural-directive-ng-switch';
import { StructuralDirectiveAttribute } from './directives/structural-directive-attribute/structural-directive-attribute';
import { SignalWritable } from './Signals/signal-writable/signal-writable';
import { SignalLinked } from './Signals/signal-linked/signal-linked';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    StructuralDirectiveNgForVsFor,
    StructuralDirectiveNgSwitch,
    StructuralDirectiveAttribute,
    SignalWritable,
    SignalLinked
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_20');
}
