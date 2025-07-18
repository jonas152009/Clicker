import { BuiltinType } from '@angular/compiler';
import { Component, inject, Injectable, signal } from '@angular/core';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../login/login';
import { LoginAPI } from '../login/login-api';
import { User } from './user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'signin-root, signin-reactive-favorite-color',
  imports: [RouterModule, ReactiveFormsModule],
  providers: [LoginAPI],
  templateUrl: './signin.html',
})
export class Signin {
  


  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('ffff');
  private router = inject(Router);
  userNameInput()
  {
    
  }
  async doSaveEvent() {
   

   
    
  }
}


