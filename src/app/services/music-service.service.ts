import { Injectable } from '@angular/core';
import exampledata from '../../app/data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MusicServiceService
{
  // Creating properties to hold the Artist[] and the Album[]
  artists: Artist[] = [];
  albums: Album[] = [];

  private host = "http://localhost:3000";

  // The constructor is initializing an artist with a couple albums found in the example data
  // and creating the Albums, Tracks, and applying them to the Artist.
  constructor(private http: HttpClient){ }

  // Return the list of Artists
  public getArtists(callback: (artists: Artist[]) => void): void  {
    this.http.get<Artist[]>(this.host + "/artists").
      subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }

  // Return the list of Albums
  public getAlbums(artist:string):Album[]
  {
    return this.albums;
  }

  // Find an album in the list of albums by its artist and ID
  public getAlbum(artist: string, id: number): Album | null {
    // Iterate through the albums
    for (let x = 0; x < this.albums.length; ++x) {
      if (this.albums[x].Artist === artist && this.albums[x].Id === id) {
        let tracks: Track[] = [];
        //Iterate through the tracks and push the tracks onto the Track[] of the album
        for (let y = 0; y < this.albums[x].Tracks.length; ++y) {
          tracks.push(new Track(
            this.albums[x].Tracks[y].Id,
            this.albums[x].Tracks[y].Number,
            this.albums[x].Tracks[y].Title,
            this.albums[x].Tracks[y].Lyrics,
            this.albums[x].Tracks[y].Video
          ));
        }
        // Return the album found
        return new Album(
          this.albums[x].Id,
          this.albums[x].Title,
          this.albums[x].Artist,
          this.albums[x].Description,
          this.albums[x].Year,
          this.albums[x].Image,
          tracks
        );
      }
    }
    return null;
  }

  // Add a new album to the list of albums
  public createAlbum(album:Album):number
  {
    this.albums.push(album);
    return 1;
  }

  // Update an existing album in the albums array
  public updateAlbum(album:Album):number
  {
    for(let x =0;x < this.albums.length;++x)
    {
      if(this.albums[x].Id == album.Id)
      {
        this.albums.splice(x, 1, album);
        return 0;
      }
    }
    return -1;
  }

  // Delete an existing album in the albums array
  public deleteAlbum(id:number, artist:string):number
  {

    for(let x =0;x < this.albums.length;++x)
    {
      if(this.albums[x].Id == id)
      {
        this.albums.splice(x, 1);
        return 0;
      }
    }
    return -1;
  }
}

