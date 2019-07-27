import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoading: boolean;
  constructor(private router: Router){
    this.router.events.subscribe((event: Event) => {
      
      if(event instanceof NavigationStart){
        this.showLoading = true;
      }
      if(event instanceof NavigationEnd){
        this.showLoading = false;
      }
    });
  }
}
