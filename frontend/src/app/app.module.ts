import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {RegisterService} from 'src/app/services/register.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RouterGuard } from './services/routerguard.service';
import {MusicDataService} from './services/musica-data.service'
import {SpotifyTokenService} from './services/spotify-token.service'


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [RegisterService, RouterGuard, MusicDataService, SpotifyTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
