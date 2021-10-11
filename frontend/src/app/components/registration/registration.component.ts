import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private rs : RegisterService) { }

  ngOnInit(): void {
  }
  id = 0;

  addUser(nf:NgForm){
    console.log('user is added', nf.value);
   this.id++;
  nf.value["userId"] = this.id;
  nf.value["fav"] = ["5YzCE6dSJC23yNCUyAHXsG"];
   this.rs.toRegister(nf.value);
  

  }

}
