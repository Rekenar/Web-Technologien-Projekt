import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
import { LoginRequestDTO } from '../models/LoginRequestDTO.model';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private http: HttpClient) { }

  private listUrl = 'http://localhost:3000/spending';
  private accountUrl = "http://localhost:3000/account";

  getList(): Observable<List[]> {
    
    return this.http.get<List[]>(this.listUrl);
  }

  deleteEntry(position:Number) {
    return this.http.delete(this.listUrl+'/'+position);
  }
  addEntry(list: List, id:string){
    return this.http.post(this.listUrl + '/'+ id, list);
  }

  login(request:LoginRequestDTO):Observable<any>{
    return this.http.post<any>(this.accountUrl,request);
  }
}
