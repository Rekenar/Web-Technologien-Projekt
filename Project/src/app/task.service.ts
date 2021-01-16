import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './models/list.model';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private http: HttpClient) { }

  private listUrl = 'http://localhost:3000/spending';


  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
  }

  deleteEntry(position:Number): Observable<List[]> {
    return this.http.delete<List[]>(this.listUrl+'/'+position)
  }
}
