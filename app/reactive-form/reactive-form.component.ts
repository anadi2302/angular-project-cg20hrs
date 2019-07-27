import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../entities/comment';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  rform: FormGroup;
  postedComment: Comment = {username: '', comment: ''};

  constructor(private builder: FormBuilder) {
    this.rform = builder.group({
      'username': ['', Validators.required],
      'comment': ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    })
  }
  addComment(form){
    this.postedComment.username = form.username;
    this.postedComment.comment = form.comment;
    alert('REACTIVE FORM SAYS: ' + JSON.stringify(this.postedComment));
  }
  ngOnInit() {
  }

}
