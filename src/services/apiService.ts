import 'whatwg-fetch';

export const BASE_URL = 'http://localhost:3030';
import { Observable } from 'rxjs';
export function post(path: string, data: any) {
  return Observable.ajax.post(BASE_URL + path, JSON.stringify(data), {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });
}

export function get(path: string) {
  return Observable.ajax.get(BASE_URL + path, {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });
}