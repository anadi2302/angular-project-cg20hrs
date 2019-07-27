import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryTax'
})
export class SalaryTaxPipe implements PipeTransform {
  //optional parameter - 
  transform(salary: number, tax: number = 10): number {
    return (salary - (salary * tax / 100));
  }
  
}
