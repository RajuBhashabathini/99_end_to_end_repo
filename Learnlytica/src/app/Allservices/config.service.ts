import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class ConfigService {

  constructor(private http: HttpClient) { }

  getCourseConfiguration() {

    return this.http.get('https://httpstat.us/201');
  }
  
  getCourseListCourse() {
    return this.http.get('assets/mock-data/courses-list.json')
  }

}
