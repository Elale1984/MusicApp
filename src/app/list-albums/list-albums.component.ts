import { Component, OnInit, Input } from '@angular/core';
import { MusicServiceService} from '../services/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit
{
  @Input() artist: Artist;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) { }

  ngOnInit()
  {
    this.albums = this.service.getAlbums(this.artist.Name);
  }

  public onSelectAlbum(album: Album)
  {
    console.log("Selected Album of " + album.Title);
    this.selectedAlbum = album;
  }
}
