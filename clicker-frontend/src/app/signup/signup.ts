import { BuiltinType } from '@angular/compiler';
import { Component, inject, Injectable, signal } from '@angular/core';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { Login } from '../login/login';
import { LoginAPI } from '../login/login-api';
import { User } from './user.interface';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { Game } from '../game/game';
import { Upgradebar } from '../game/upgradebar/upgradebar';

@Component({
  selector: 'signup-root, signup-reactive-favorite-color',
  imports: [RouterModule, ReactiveFormsModule],
  providers: [LoginAPI],
  templateUrl: './signup.html',
})
export class Signup {
  username = '';
  password = '';
  isunknownUser = false;
  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    VallidationNoSpace,
  ]);
    userPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
    VallidationNoSpace,
  ]);
  private router = inject(Router);

  async doSaveEvent() {
      this.username = this.userNameControl.value ?? '';
      this.password = this.userPasswordControl.value ?? '';
    try {
    console.log(this.username)
   const createdUser  = await this.login.createUser(this.username, this.password);
   if(createdUser == false)
   {
      this.isunknownUser = true
      return;
   }
    } catch (error) {
      console.log("User Creation error")
    }

    
    
    this.router.navigate(['login']);
  }
  
 
}
 export function VallidationNoSpace(
    nameControl: AbstractControl<any, any, any>
  ): ValidationErrors | null {
    const isSpace = /\s/.test(nameControl.value)
    return isSpace ? { NoSpace: true } : null;
  }
