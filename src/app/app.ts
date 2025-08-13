import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { StructuralDirectiveNgForVsFor } from './directives/structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    StructuralDirectiveNgForVsFor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_20');
}
