import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  login(request:LoginRequestDTO):Observable<LoginResponseDTO>{
    return this.http.post<LoginResponseDTO>("http://localhost:3000/api/login",request);
  }
}

export interface LoginRequestDTO{
  username:string,
  password:string
}

export interface LoginResponseDTO{
  result:boolean;
}