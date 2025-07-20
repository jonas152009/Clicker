import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../signup/user.interface';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginAPI {
  constructor(private readonly http: HttpClient) {}
  
  async getUsers() {
    try{
   return firstValueFrom(this.http.get<User[]>('http://localhost:3000/users'));
    }
    catch(error){
      console.error("No backend Conection");
      return[{name:"",age:0}]
    }
    }
  
  async createUser(user: User){
      try{
    return firstValueFrom(this.http.post<User>('http://localhost:3000/users', user));
    }
    catch(error){
      console.error("No backend Conection");
      return {name:"",age:0}
    }
  }
    async deleteuser(user: User){
      try{
    return firstValueFrom(this.http.post<User>('http://localhost:3000/users', user));
    }
    catch(error){
      console.error("No backend Conection");
      return {name:"",age:0}
    }
    }
}
