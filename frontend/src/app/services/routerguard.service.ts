import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RegisterService } from './register.service';
//implements CanActivate

@Injectable()
export class RouterGuard implements CanActivate {

    constructor(private rs: RegisterService){

    }
    canActivate(){
        return this.rs.loadLandingPage().isActivated == true;
    }
}