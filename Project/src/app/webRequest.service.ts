import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly Root_URL

  constructor(private http: HttpClient) {
    this.Root_URL = 'http://localhost:3001';
  }

  get(uri: String){
    return this.http.get(`${this.Root_URL}/${uri}`)
  }
  post(uri: String, payload: Object){
    return this.http.post(`${this.Root_URL}/${uri}`, payload)
  }
  patch(uri: String, payload: Object){
    return this.http.patch(`${this.Root_URL}/${uri}`, payload)
  }
  delete(uri: String){
    return this.http.delete(`${this.Root_URL}/${uri}`)
  }
}
