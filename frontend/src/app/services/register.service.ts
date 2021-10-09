import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {


  constructor(private http:HttpClient){

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
}
