import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';
//import { environment } from '../../environments/environment';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {
  //favouritesList: Array<any> = [];

  constructor(private spotifyToken: SpotifyTokenService, private http: HttpClient) { }

  getNewReleases(): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<any>("https://api.spotify.com/v1/browse/new-releases", { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  getArtistById(id: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }))
  }
  //question no group, only market
  getAlbumsByArtistId(id: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<any>(`https://api.spotify.com/v1/artists/${id}/albums/?market=ES&limit=50`, { headers: { "Authorization": `Bearer ${token}` } });
    }))
  }

  getAlbumById(id: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<any>(`https://api.spotify.com/v1/albums/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }))
  }

  //only 10 search
  searchArtists(searchString: String): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
      return this.http.get<any>(`https://api.spotify.com/v1/search?q=${searchString}&type=artist`, { headers: { "Authorization": `Bearer ${token}` } });
    }))
  }
 

  addToFavourites(id, user): Observable<[any]> {
   
    return this.http.put<[any]>(`http://localhost:8080/mainapp/updatefav/${id}/${user}`, null);
  }

 
}
