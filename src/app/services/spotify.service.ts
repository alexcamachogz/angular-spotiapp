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
        'Bearer BQDqOg9qKv8bhju4S1fHiIzZlKqZGMlePiAIDrfqtRXT7e5tMLQvKgsiC1KjKYHparRjgCleJPQj-fyJmuc'
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

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((data) => {
        return data['artists'].items
      })
    )
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(
      map((data) => data['tracks'])
    )
  }
}
