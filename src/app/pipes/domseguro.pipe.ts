import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(url: string, value: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value)
  }
}
