import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { MusicDataService } from '../../services/musica-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favourites: Array<any>;
  sub: Subscription;
  user:any;
  constructor(private mds: MusicDataService, private rs: RegisterService) { }

  ngOnInit(): void {
    this.user = this.rs.getCurrentUser();
    this.sub = this.mds.getFavourites(this.user.userId)
      .subscribe(data => {
        this.favourites = data.tracks;
      })
  }

  removeFromFavourites(id: any) {
    this.mds.removeFromFavourites(id)
    .subscribe(data=>{
      this.favourites=data.tracks;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}
