import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-login/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  baseUrl: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  fetchAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl);
  }
}
