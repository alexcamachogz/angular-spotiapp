import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo')
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDR_Gt8e0wLXCEgno44RodW4Ro-9Xp_PJF2HPMK3LsR5VhZYlmFUi7sxQo8vk4GF5QK_z2bwTbWTXaQWPw'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
    })
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDR_Gt8e0wLXCEgno44RodW4Ro-9Xp_PJF2HPMK3LsR5VhZYlmFUi7sxQo8vk4GF5QK_z2bwTbWTXaQWPw'
    })

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`,
      {
        headers
      }
    )
  }
}
