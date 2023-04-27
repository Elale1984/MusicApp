import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';

@NgModule({
  declarations: [
    AppComponent,
    ListArtistsComponent,
    ListAlbumsComponent,
    CreateAlbumComponent,
    DisplayAlbumComponent,
    EditAlbumComponent,
    DeleteAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
