import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent implements OnInit
{
  @Input() album: Album;

  constructor() { }

  ngOnInit() { }
}
