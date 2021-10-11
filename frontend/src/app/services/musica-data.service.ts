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
 

  addToFavourites(id): Observable<[String]> {
    // TODO: make a PUT request to environment.userAPIBase/favourites/:id to add id to favourites
    return this.http.put<[String]>(`https://fast-gorge-00438.herokuapp.com/api/user/favourites/${id}`, null);
  }

  removeFromFavourites(id): Observable<any> {
    return this.http.delete<[String]>(`https://fast-gorge-00438.herokuapp.com/api/user/favourites/${id}`).pipe(mergeMap(favouritesArray => {
      // TODO: Perform the same tasks as the original getFavourites() method, only using "favouritesArray" from above, instead of this.favouritesList
      // NOTE: for the empty array, you will need to use o=>o.next({tracks: []}) instead of o=>{o.next([])}
      if (favouritesArray.length > 0) {
        return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
          return this.http.get<any>(`https://api.spotify.com/v1/tracks?ids=${favouritesArray.join()}`, { headers: { "Authorization": `Bearer ${token}` } });
        }))
      } else {
        return new Observable(o => o.next({ tracks: [] }));
      }
    }));
  }

  getFavourites(): Observable<any> {
    return this.http.get<[String]>("https://fast-gorge-00438.herokuapp.com/api/user/favourites/").pipe(mergeMap(favouritesArray => {
      // TODO: Perform the same tasks as the original getFavourites() method, only using "favouritesArray" from above, instead of this.favouritesList
      // NOTE: for the empty array, you will need to use o=>o.next({tracks: []}) instead of o=>{o.next([])}
      if (favouritesArray.length > 0) {
        return this.spotifyToken.getBearerToken().pipe(mergeMap(token => {
          return this.http.get<any>(`https://api.spotify.com/v1/tracks?ids=${favouritesArray.join()}`, { headers: { "Authorization": `Bearer ${token}` } });
        }))
      } else {
        return new Observable(o => o.next({ tracks: [] }));
      }
    }));
  }
}
