import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [NgIf],
  templateUrl: './structural-directive-ngif-vs-if.html',
  styleUrl: './structural-directive-ngif-vs-if.scss'
})
export class StructuralDirectiveNgifVsIf {
  isChecked: boolean = false;
  isShowinput:boolean = true;
  input1: string = 'write something here';
  input2: string = 'write something here';
  onClick() {
    this.isChecked = !this.isChecked;
  }

   showInput() {
    this.isShowinput = true;
  }

   hideInput() {
    this.isShowinput = false;
  }
}
