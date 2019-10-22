import {HttpHeaders, HttpParams} from '@angular/common/http';


const local = 'http://192.168.10.195:8000';
const server = 'http://34.212.63.184';

export const domain = local;

export function getHeaders() {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('token')
    })
  };
}

export function getHeadersParams(params) {

  for (const param in params) {
    if (params[param] === null) {
      delete params[param];
    }
  }

  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('token')
    }),
    params: params
  };
}
