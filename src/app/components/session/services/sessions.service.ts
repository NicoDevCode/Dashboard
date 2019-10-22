import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain, getHeaders} from '../../utils/api';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private login = `${domain}/auth/login/`;
  private logout = `${domain}/auth/logout/`;

  constructor(private  http: HttpClient) {
  }

  signIn(data): Observable<any> {
    return this.http.post(this.login, data);
  }

  signOut(): Observable<any> {
    return this.http.post(this.logout, null, getHeaders());
  }


}
