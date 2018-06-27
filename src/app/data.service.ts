import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getVideos(){
    return this.http.get('https://www.googleapis.com/youtube/v3/videos/?regionCode=IN&chart=mostPopular&part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyAxaWHTI1S5Z1LvCDt_xCnKeOaCCpDCwR8')
  }
}
