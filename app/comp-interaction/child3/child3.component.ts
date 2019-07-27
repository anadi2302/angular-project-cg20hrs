import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  @Output() messageEvent = new EventEmitter<string>();
  message: string = 'Value sent from child to parent on button click.';
  sendMessage(){
    this.messageEvent.emit(this.message);
  }

}
