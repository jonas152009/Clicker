import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../signin/user.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginAPI {
  constructor(private readonly http: HttpClient) {}

  async getUsers() {
   return firstValueFrom(this.http.get<User[]>('http://localhost:3000/users'));
  }
  async createUser(user: User){
    age: Number;
    this.http.post<User>('http://localhost:3000/users', user)
  }
}
