import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain, getHeaders, getHeadersParams} from '../../utils/api';

@Injectable({
  providedIn: 'root'
})
export class CanalesService {

  private url_updatePrioridad = `${domain}/api/stories/`;
  constructor(private  http: HttpClient) {
  }

  getChanelsFilter(data, url): Observable<any> {
    return this.http.get(url  , getHeadersParams(data));
  }

  updatePrioridad(id, num) {
    return this.http.put(`${this.url_updatePrioridad}${id}/add_favorite/`, num, getHeaders());
  }
}
