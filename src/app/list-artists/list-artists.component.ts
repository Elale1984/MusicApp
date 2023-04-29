import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artists.model';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../services/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})

export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data....");
      this.artists = this.service.getArtists();
      this.selectedArtist = null;
    });
  }

  public onSelectArtist(artist: Artist): void {
    console.log("Selected Artist of " + artist.Name);
    this.selectedArtist = artist; 
  }
}
