import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';

const routes: Routes = [
  { path: 'create', component: CreateAlbumComponent },
  { path: 'list-artists', component: ListArtistsComponent },
  { path: 'list-albums', component: ListAlbumsComponent },
  { path: 'display/:id', component: DisplayAlbumComponent },
  { path: 'edit/:artist/:id', component: EditAlbumComponent },
  { path: 'delete/:artist/:id', component: DeleteAlbumComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
