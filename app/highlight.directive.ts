import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  constructor(private element: ElementRef) { 
    console.log(this.element.nativeElement);
    this.element.nativeElement.style.backgroundColor = 'yellow';
    
  }
}
