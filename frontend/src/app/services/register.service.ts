import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {
isActivated =false;
data;
favArray:Array<any>=[];

  constructor(private http:HttpClient, private r: Router){

  }
    
  toRegister(user:any){
    
    this.http.post('http://localhost:8080/mainapp/saveuser', user).subscribe((response) => {
        console.log(response)      
    })

}

loadUserFromDB(){
  return this.http.get('http://localhost:8080/mainapp/loadall').subscribe((response)=> {
      console.log(response);
  })
}

login(login:any){
  this.http.post('http://localhost:8080/mainapp/login', login).subscribe(
    data => {
      
      this.data = data;
      console.log(data);
      this.r.navigate(['/landingpage']);
    },
    error =>  {
      alert('Wrong credentials. Please register')
      this.r.navigate(['/register']);
      console.log(error)
    }

    
  )
  console.log(this.isActivated)
}

loadLandingPage() {
 return {
  isActivated: this.isActivated,
  data :this.data
 }
}

getCurrentUser(){
  return this.data;
}
resetCurrentUser(){
  this.data = null;
}
getFav(id){
  
  return this.http.get(`http://localhost:8080/mainapp/loadallfav/${id}`)
}

setFavArray(data){
 this.favArray.push(data);
 
}
getFavArray(){
  return this.favArray;
}


}
