
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'frontend';
  searchString: String;
  

  sub: Subscription;
  constructor(private router: Router) { }

  ngOnInit() {
    this.searchString = '';
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
       
      }
    });
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    this.searchString = "";
  }

  logout() {
    this.router.navigate(['login']);
  }

  
}
