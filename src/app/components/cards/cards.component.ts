import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  @Input() items = []
}
