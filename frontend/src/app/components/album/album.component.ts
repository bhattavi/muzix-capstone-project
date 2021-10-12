import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { MusicDataService } from '../../services/musica-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
  album: any;

  id: number;
  sub: Subscription;
  constructor(private msb: MatSnackBar, private route: ActivatedRoute, private mds: MusicDataService, private rs: RegisterService) { }
user:any;
  ngOnInit(): void {
 
    this.id = this.route.snapshot.params['id'];
    this.sub = this.mds.getAlbumById(this.id).subscribe(data => this.album = data);
  }

  addToFavourites(track: any, user:any) {
   
    console.log(this.sub);

  
    this.user = this.rs.getCurrentUser();
    console.log(track)
    this.rs.setFavArray(track);
   
    this.mds.addToFavourites(track.name, this.user.userId).subscribe(
      (data) => {
        this.msb.open("Adding to Favourites...", "Done", { duration: 1500 });
      },
      (err) => {
        this.msb.open("Unable to Favourites...", "Done", { duration: 1500 });
        console.log(err);
      }
    )
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
