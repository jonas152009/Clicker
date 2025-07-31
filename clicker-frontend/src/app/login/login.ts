import { Component, inject, signal } from '@angular/core';
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

  counter = signal(0);
  username = '';
  isunknownUser = false;
  constructor(private readonly login: LoginAPI) {
  }
  
  clickedCookie() {
    const input = document.getElementById("userInput")
    const cookie = document.getElementById("Cookie")
  const  cookieButton = document.getElementById("CookieButton")
  this.counter.update((value) => value+1)
  switch(this.counter())
  {
    
    case(10):
   
    cookie?.setAttribute("src","https://piskel-imgstore-b.appspot.com/img/dc8f7394-6e03-11f0-b7ab-dfcd6ab0b5c0.gif")
    break;
    case(20):
      cookie?.setAttribute("src", "https://piskel-imgstore-b.appspot.com/img/fd09ce94-6e03-11f0-bfae-dfcd6ab0b5c0.gif")
      break;
      case(3):
    
    default:
      input?.classList.remove("animate-ping")
      input?.focus()
      break;
    
  }
}
Inputchange() {
  if(this.isunknownUser = false){
this.isunknownUser = true
  }
}

  userNameControl = new FormControl('');

  private router = inject(Router);
  async doConfirmEvent() {
    this.username = this.userNameControl.value ?? '';
    console.log(this.username)
   const access_token =  await this.login.loginUser(this.username);
   if(access_token.headpayload == null){
    console.error("User does not exist")
    this.isunknownUser = true
    return ;
   }
   
   document.cookie = "hp"+"="+access_token.headpayload +"; path=/";
   document.cookie= "s"+ "="+access_token.signature +"; path=/";
   sessionStorage.setItem("name",this.username)
 
   this.router.navigate(['game']);
   
  }
}
