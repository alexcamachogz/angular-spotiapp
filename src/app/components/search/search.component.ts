import { Component } from '@angular/core'
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists = []
  constructor(private spotify: SpotifyService) {}
  search(term: string): void {
    console.log(term)
    this.spotify.getArtist(term).subscribe((data) => {
      this.artists = data.artists.items
    })
  }
}
