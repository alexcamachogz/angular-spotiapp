import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { ArtistComponent } from './components/artist/artist.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component'

// Import routes
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
