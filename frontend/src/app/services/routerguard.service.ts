import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegisterService } from './register.service';
//implements CanActivate

@Injectable()
export class RouterGuard implements CanActivate {

    constructor(private rs: RegisterService, private router: Router){

    }
    canActivate(){
        if(this.rs.getCurrentUser()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}