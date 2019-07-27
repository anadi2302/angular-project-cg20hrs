import { Component } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  nums: number[] = [1,2,3,4,5,6,7];
  value?: string;
  constructor(private service: SampleService){
    this.value = service.getMessage();
  }
}
