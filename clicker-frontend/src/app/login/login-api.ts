import { HttpClient, HttpContext, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CreateUserdto } from '../signup/createUserdto';
import { User } from '../signup/user.interface';


@Injectable({
  providedIn: 'root',
})
export class LoginAPI {
  constructor(private readonly http: HttpClient) {}

  async createUser(user: CreateUserdto) {
    try {
      return firstValueFrom(
        this.http.post<User>('http://localhost:3000/users', user)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: '' };
    }
  }
  async loginUser(username: string) {
    return firstValueFrom(
      this.http.post<{headpayload: string,signature: string}>('http://localhost:3000/auth/login', {name: username}));
  }
  async deleteUser(id: string) {
    try {
      return firstValueFrom(
        this.http.delete<User>('http://localhost:3000/users' + id)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: '' };
    }
  }
  async UpdateUser(id: string, user: User) {
    try {
      
      return firstValueFrom(
        this.http.patch<User>('http://localhost:3000/users/'+ id , user)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: '' };
    }
  }
      async getUser(name: string) {
    try {
      console.log('http://localhost:3000/users/'+name)
      return firstValueFrom(
        this.http.get<User>('http://localhost:3000/users/'+name)
      );
    } catch (error) { 
      console.error('No backend Conection');
      return { name: '' , count: 0, buildings: [], _id:'', playedBefore: false};
    }
  }
  async getCookies(){
   return await  this.http.get('http://localhost:3000/cookies', {withCredentials: true})
  }
}
