import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artists.model';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../services/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit
{
  artists:Artist[] = [];
  selectedArtist: Artist = null;
  loadingMsg: String = "Please wait……loading";

  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

  ngOnInit()
  {
    // Subscribe to query parameter changes (this will be a timestamp) then call Music Service to get a list of Artists
    this.route.queryParams.subscribe(params => {
        console.log("Getting data....");
        this.service.getArtists( (artists:Artist[]) =>
        {
          this.artists = artists;
          this.selectedArtist = null;
          this.loadingMsg = null;
        });
    });
  }

  public onSelectArtist(artist: Artist)
  {
    console.log("Selected Artist of " + artist.Name);
    this.selectedArtist = artist;
  }
}
