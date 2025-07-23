import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../signup/user.interface';
import { Upgradebar } from '../game/upgradebar/upgradebar';
import { CreateUserdto } from '../signup/createUserdto';

@Injectable({
  providedIn: 'root',
})
export class LoginAPI {
  constructor(private readonly http: HttpClient) {}

  async getUsers() {
    try {
      return firstValueFrom(
        this.http.get<User[]>('http://localhost:3000/users')
      );
    } catch (error) {
      console.error('No backend Conection');
      return [{ name: '' , count: 0, buildings: [], _id:''}];
    }
  }

  async createUser(user: CreateUserdto) {
    try {
      return firstValueFrom(
        this.http.post<User>('http://localhost:3000/users', user)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: ''};
    }
  }
  async deleteUser(id: string) {
    try {
      return firstValueFrom(
        this.http.delete<User>('http://localhost:3000/users' + id)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: ''};
    }
  }
    async UpdateUser(id: string, user: User) {
    try {
      console.log(id)
      return firstValueFrom(
        
        this.http.patch<User>('http://localhost:3000/users/' + id, user)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: ''};
    }


  }
    async getUser(id: string) {
    try {
      console.log('http://localhost:3000/users/'+id)
      return firstValueFrom(
        this.http.get<User>('http://localhost:3000/users/'+id)
      );
    } catch (error) {
      console.error('No backend Conection');
      return { name: '' , count: 0, buildings: [], _id:''};
    }
  }
}
