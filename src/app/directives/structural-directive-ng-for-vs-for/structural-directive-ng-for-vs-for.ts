import { Component } from '@angular/core';
import { employee } from '../../DTO/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directive-ng-for-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-for-vs-for.html',
  styleUrl: './structural-directive-ng-for-vs-for.scss'
})
export class StructuralDirectiveNgForVsFor {
employees :employee[]= [
    { id:1,name: 'John Doe', age: 30, position: 'Developer', email: 'John@gmail.com' },
    {id:2, name: 'Jane Smith', age: 25, position: 'Designer', email: 'Jane@gmail.com'} ,
    {id:3, name: 'Alice Johnson', age: 28, position: 'Manager', email: 'Alice@gmail.com'},
    {id:4, name: 'Bob Brown', age: 35, position: 'Analyst', email: 'dd@dd.com' },
    {id:5, name: 'Charlie White', age: 32, position:'ss', email: 'dd@dd.d'}
];
companyList: string[] = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'];
emptyList: string[] = [ ];
}
