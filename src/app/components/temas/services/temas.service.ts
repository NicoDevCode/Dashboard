import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain, getHeaders, getHeadersParams} from '../../utils/api';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(private  http: HttpClient) {
  }


  getTemasFilter(data, url): Observable<any> {
    return this.http.get(url, getHeadersParams(data));
  }

}
