import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { ArtistComponent } from './components/artist/artist.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { CardsComponent } from './components/cards/cards.component'
import { LoadingComponent } from './components/shared/loading/loading.component'

// Modules routes
import { ROUTES } from './app.routes'

// Services
import { SpotifyService } from './services/spotify.service'

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe'
import { DomseguroPipe } from './pipes/domseguro.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
