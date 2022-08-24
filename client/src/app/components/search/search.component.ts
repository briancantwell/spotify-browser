import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  resources:ResourceData[];
  searchCategories:string[] = ['artist', 'album', 'track'];
  searchCategory:string = this.searchCategories[0];
  showTracks:boolean = false;


  constructor(private spotifyService:SpotifyService) {  }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response
    this.spotifyService.searchFor(this.searchCategory, encodeURIComponent(this.searchString)).then(data =>{
      this.resources =  data;
      console.log(this.resources)
      if(this.searchCategory == 'track'){
        this.showTracks = true;
      }
      else{
        this.showTracks = false;
      }
    });
  }
}
