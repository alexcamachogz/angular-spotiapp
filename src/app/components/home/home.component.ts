import { Component } from '@angular/core'
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs = []
  loading: boolean
  error: boolean
  mensajeError: string
  constructor(private spotify: SpotifyService) {
    this.loading = true
    this.error = false
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newSongs = data
        this.loading = false
      },
      (serviceError) => {
        this.loading = false
        this.error = true
        this.mensajeError = serviceError.error.error.message
      }
    )
  }
}
