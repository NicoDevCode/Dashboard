import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain, getHeaders} from '../../../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ModalEditPrioridadService {

  private url_updatePrioridad = `${domain}/api/stories/`;

  constructor(private  http: HttpClient) {
  }


  updatePrioridad(id, num) {
    return this.http.put(`${this.url_updatePrioridad}${id}/add_favorite/`, num, getHeaders());
  }
}
