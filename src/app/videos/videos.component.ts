import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})



export class VideosComponent implements OnInit {

  static pathUrl;
  videos$: Object;

  constructor(private data: DataService) {
    VideosComponent.pathUrl = "https://www.youtube.com/embed/";

   }
   
   get staticPathUrl(){
    return VideosComponent.pathUrl;
  }

  ngOnInit() {
    this.data.getVideos().subscribe(
      data => this.videos$ = data      
    )
  }

}
