import { Injectable } from '@angular/core';
import exampledata from '../../app/data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';

@Injectable({providedIn: 'root'})
export class MusicServiceService
{
  // Creating properties to hold the Artist[] and the Album[]
  artists: Artist[] = [];
  albums: Album[] = [];

  // The constructor is initializing an artist with a couple albums found in the example data
  // and creating the Albums, Tracks, and applying them to the Artist.
  constructor()
  {
    // Creating an Artist and adding to Artist[]
    this.artists.push(new Artist(0, "The Beatles"));

    // Creating a list of Albums and its Tracks
    for(let x =0;x < exampledata.length;++x)
    {
      // Only getting "The Beatles" artist
      if(exampledata[x].artist == "The Beatles")
      {
        // Creating an empty Track array to store the tracks for the album
        let tracks: Track[] = [];

        // Iterating over the exampledata and adding the tracks to tracks[]
        for(let y =0;y < exampledata[x].tracks.length;++y)
          tracks.push(new Track(exampledata[x].tracks[y].trackId, exampledata[x].tracks[y].number, exampledata[x].tracks[y].title,
            exampledata[x].tracks[y].lyrics, exampledata[x].tracks[y].video));
        // Adding the new albums created to the albums[]
        this.albums.push(new Album(exampledata[x].albumId, exampledata[x].title, exampledata[x].artist,
          exampledata[x].description, exampledata[x].year, exampledata[x].image, tracks));
      }
    }
  }

  // Return the list of Artists
  public getArtists(): Artist[]
  {
    return this.artists;
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

