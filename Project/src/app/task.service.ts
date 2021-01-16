import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './models/list.model';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private http: HttpClient) { }

  private listUrl = 'http://localhost:3000/list';

  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
  }
}
