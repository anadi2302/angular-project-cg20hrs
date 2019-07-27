import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective implements OnInit {
  @Input() appMyLoopOf: Array<any>;
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {}

  ngOnInit(){
    for(let item of this.appMyLoopOf){
      this.container.createEmbeddedView(this.template, {$implicit: item});
    }
  }

}
