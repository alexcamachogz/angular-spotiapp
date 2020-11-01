import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  @Input() items = []

  constructor(private router: Router) {}

  seeArtist(item: any) {
    let artistId
    if (item.type === 'artist') {
      artistId = item.id
    } else {
      artistId = item.artists[0].id
    }

    this.router.navigate(['/artist', artistId])
  }
}
