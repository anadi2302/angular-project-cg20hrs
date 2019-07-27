import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent{
  fname: string = 'Anadi';
  lname: string = 'Sharma';
  salary: number = 10000;
  age: number = 31;
  borderClass = "class1";
  styles = true;

  applyStyles(){
    this.styles = !this.styles;
  }
  getDetail(): string {
    return `${this.fname} is ${this.age} years old`;
  }
  setGreenBorder(){
    this.borderClass = "class2";
  }
  setBlueBorder(){
    this.borderClass = "class1";
  }
}
