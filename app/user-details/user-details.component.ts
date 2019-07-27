import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user = {};
  showLoading: boolean = true;
  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(user => {
      this.user = user;
      this.showLoading = false;
    })
  
  }

}
