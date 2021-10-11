
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'frontend';
  searchString: String;
  token: any;
  

  sub: Subscription;
  constructor(private router: Router, private rs: RegisterService) { }

  ngOnInit() {
    this.searchString = '';
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.rs.getCurrentUser();
        
       console.log(this.token)
      }
    });
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    this.searchString = "";
  }

  logout() {
    this.token = null;
    this.rs.resetCurrentUser();
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.token = null;
    this.sub?.unsubscribe();
  }

  
}
