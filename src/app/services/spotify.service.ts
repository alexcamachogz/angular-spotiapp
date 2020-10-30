import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo')
  }

  getNewReleases(): void {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDf7iF22VgPJ-GxVLmVgbwjszZ-JMag8mybZROYevddo1EwtH7COXYm8aKh6a8zuMMTeDof9KRRV8BSssI'
    })

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data)
      })
  }
}
