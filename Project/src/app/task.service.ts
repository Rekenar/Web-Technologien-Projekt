import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './models/list.model';
import { WebRequestService } from './webRequest.service';


@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private WebReqService:WebRequestService,private http: HttpClient) { }

  private listUrl = 'http://localhost:3001/list';

  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
  }
}
