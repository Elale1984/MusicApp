import { Component, Version } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '"My Music Collection';
  version = '"1.0"';

  displayVersion() {
    alert("Version: " + this.version);
  }

  displayArtistList() {
    alert("Artist List will be displayed here");
  }
}


