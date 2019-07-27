import { Component } from '@angular/core';
import { Employee } from '../entities/employee';
@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  show: boolean = true;
  btnText: string = "Hide Records";
  showHideRecords(){
    this.show = !this.show;
    this.btnText = this.show ? "Hide Records" : "Show Records";
  }
  empList: Employee[] = [
    {firstName: 'Anadi', lastName: 'Sharma', doj: '2018-07-16', salary: 10000, dob: '1988-02-23'},
    {firstName: 'Mohit', lastName: 'Dubey', doj: '2018-05-16', salary: 15000},
    {firstName: 'Amit', lastName: 'Trivedi', doj: '2018-08-26', salary: 20000},
    {firstName: 'Saumya', lastName: 'Awasthi', doj: '2018-02-15', salary: 12000}
  ];
}
