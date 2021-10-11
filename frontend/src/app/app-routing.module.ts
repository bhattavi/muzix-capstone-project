import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterGuard } from './services/routerguard.service'
import {ArtistDiscographyComponent} from './components/artist-discography/artist-discography.component'
import { AlbumComponent } from './components/album/album.component';
import { AboutComponent } from './components/about/about.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  { path: 'landingpage', component: LandingpageComponent, canActivate: [RouterGuard]},
  { path: 'artist/:id', component: ArtistDiscographyComponent },
  { path: 'album/:id', component: AlbumComponent},
  { path: 'about', component: AboutComponent},
  { path: "search", component: SearchResultComponent },
  { path: "favourites", component: FavouritesComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
