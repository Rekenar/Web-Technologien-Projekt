import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
import { AccountRequestDTO } from '../models/AccountRequestDTO.model';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private http: HttpClient) { }

  private listUrl = 'http://localhost:3000/spending';
  private overallUrl = 'http://localhost:3000/spending/overall';
  private accountUrl = "http://localhost:3000/account";
  private registerUrl = "http://localhost:3000/register";
  private addEntryUrl = 'http://localhost:3000/spending/add';

  getList(): Observable<List[]> {
    const x = {
      token: localStorage.getItem("token")
    }
    return this.http.post<List[]>(this.listUrl, x)
  }

  getOverall(): Observable<string> {
    const x = {
      token: localStorage.getItem("token")
    }
    return this.http.post<string>(this.overallUrl, x)
  }
  deleteEntry(position:Number) {
    return this.http.delete(this.listUrl+'/'+position);
  }

  addEntry(list: List) {
    return this.http.post(this.addEntryUrl, list);
  }

  login(request: AccountRequestDTO): Observable<any> {
    return this.http.post<any>(this.accountUrl, request);
  }
  register(request: AccountRequestDTO): Observable<any> {
    return this.http.post<any>(this.registerUrl, request);
  }
}
