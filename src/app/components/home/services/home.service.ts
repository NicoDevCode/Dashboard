import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain, getHeaders, getHeadersParams} from '../../utils/api';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private last_stories = `${domain}/api/stories/last_stories/`;

  constructor(private  http: HttpClient) {
  }

  getLastStories(): Observable<any> {
    return this.http.get(this.last_stories, getHeaders());
  }
}
