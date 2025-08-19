import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-attribute',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-attribute.html',
  styleUrl: './structural-directive-attribute.scss'
})
export class StructuralDirectiveAttribute {
  // 1
  textColor: string = 'text-success';
  changeColor(color: string) {
    this.textColor = color;
  }

  styleColor: string = "orange";
  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }
  // 2
  isTextGreen: boolean = false;

  isTextOrange: boolean = false;
  // 3
  userClass: string = '';

  customClass: any = {
    'color': 'yellow',
    'height': '150px',
    'width': '400px',
    'border': '1px solid black'
  }
}
