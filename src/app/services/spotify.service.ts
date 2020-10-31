import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBfraW_GaMkHhorbYswQ9QYtIBDfqFmgl7hnTMDVpcUIruC_-037FV1VAq0szI50E2iW6XjviOLSG01XB8'
    })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => {
        return data['albums'].items
      })
    )
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((data) => {
        return data['artists'].items
      })
    )
  }
}
