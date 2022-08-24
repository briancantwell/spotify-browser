import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
    selector: 'app-track-page',
    templateUrl: './track-page.component.html',
    styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
    trackId:string;
    track:TrackData;
    audioFeatures:TrackFeature[];

    featureTypes:string[] = [
        "acousticness",
        "danceability",
        "energy",
        "instrumentalness",
        "liveness",
        "speechiness",
        "valence"
    ];


    constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

    ngOnInit() {
        this.trackId = this.route.snapshot.paramMap.get('id');
        //TODO: Inject the spotifyService and use it to get the track data and it's audio features

        this.spotifyService.getTrack(this.trackId).then(data=>{
            this.track = data;
        });

        this.spotifyService.getAudioFeaturesForTrack(this.trackId).then(data=>{

            // console.log("track-page: ", data);
            this.audioFeatures = data;
            console.log(this.audioFeatures);

        });



    }


//
// acousticness
//
// analysis_url
//
// danceability
//
// duration_ms
//
// energy
//
// id
//
// instrumentalness
//
// key
//
// liveness
//
// loudness
//
// mode
//
// speechiness
//
// tempo
//
// time_signature​
// track_href
//
// type
//
// uri
//
// valence
}
