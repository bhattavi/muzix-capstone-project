import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicDataService } from 'src/app/services/musica-data.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})


  export class LandingpageComponent implements OnInit, OnDestroy {
    releases: any;
    releasesSub: any;
  
    constructor(private mds: MusicDataService) { }
  
    ngOnInit(): void {
      //this.releases = (data as any).default.albums.items;
      this.releasesSub = this.mds.getNewReleases()
        .subscribe(
          data => {
            this.releases = data.albums.items;
            console.log(this.releases)
          }
        )
    }
  
    ngOnDestroy() {
      this.releasesSub?.unsubscribe();
    }
  
  }


