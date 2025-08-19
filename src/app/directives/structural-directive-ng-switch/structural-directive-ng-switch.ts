import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-switch.html',
  styleUrl: './structural-directive-ng-switch.scss'
})
export class StructuralDirectiveNgSwitch {
grade: number=0;
setGrade(grade:number) {
    this.grade = grade;
  }
}
