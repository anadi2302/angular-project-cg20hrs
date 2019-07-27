import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showLoading: boolean = true;
  userList: any[];
  constructor(private service: DataService, private router: Router) {
  }
  ngOnInit() {
    this.service.getUsers().subscribe(users => {
      this.userList = users;
      this.showLoading = false;
    })
  }
  goToDetails(id){
    this.router.navigate(['/users', id]);
  }

}
