import { Component, OnInit } from '@angular/core';
import { Comment } from '../entities/comment';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  postedComment: Comment = {username:'', comment:''};
  log(msg){
    console.log(msg);
  }
  addComment(){
    alert(JSON.stringify(this.postedComment));
  }
  constructor() { }

  ngOnInit() {
  }

}
