import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginAPI } from './login-api';
import { stringify } from 'postcss';

@Component({
  selector: 'app-login, login-reactive-favorite-color',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  username = '';
  isunknownUser = false;
  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('');

  private router = inject(Router);
  async doConfirmEvent() {
    this.username = this.userNameControl.value ?? '';
    console.log(this.username)
   const access_token =  await this.login.loginUser(this.username);
   if(access_token.headpayload == null){
    console.error("User does not exist")
    return ;
   }
   
   document.cookie = "hp"+"="+access_token.headpayload +"; path=/auth";
   document.cookie= "s"+ "="+access_token.signature +"; path=/auth";
   sessionStorage.setItem("name",this.username)
   this.login.getCookies();
   this.router.navigate(['game']);
   
  }
}
