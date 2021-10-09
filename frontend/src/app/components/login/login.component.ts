import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rs : RegisterService) { }

  ngOnInit(): void {
  }
 

  login(nf:NgForm){
    
console.log(nf.value);
   this.rs.login(nf.value);
  

  }
}
