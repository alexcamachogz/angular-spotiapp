import { Component } from '@angular/core'
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists = []
  loading: boolean
  constructor(private spotify: SpotifyService) {}
  search(term: string): void {
    this.loading = true
    this.spotify.getArtists(term).subscribe((data) => {
      this.artists = data
      this.loading = false
    })
  }
}
