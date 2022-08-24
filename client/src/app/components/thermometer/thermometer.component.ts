import {Component, Input, OnInit} from '@angular/core';
import {TrackData} from "../../data/track-data";
import {TrackFeature} from "../../data/track-feature";
import {SpotifyService} from "../../services/spotify.service";


@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.

  @Input() featureDouble:number;
  @Input() featureName:string;
  trackFeature:TrackFeature;

  constructor() { }

  ngOnInit() {
    this.trackFeature = new TrackFeature(this.featureName, this.featureDouble);
  }

}
