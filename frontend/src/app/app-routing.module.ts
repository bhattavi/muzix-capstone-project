import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterGuard } from './services/routerguard.service'


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegistrationComponent
  },{
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
      path: 'landingpage',
      component: LandingpageComponent
     
  }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
