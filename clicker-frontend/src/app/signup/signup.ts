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
  isunknownUser = false;
  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    VallidationNoSpace,
  ]);
  private router = inject(Router);

  async doSaveEvent() {
      this.username = this.userNameControl.value ?? '';
    const users = await this.login.getUsers();
    try {
      for (const user of users) {
        if (user.name == this.username) {
           this.isunknownUser = false; 
           return;
        }
      }
      this.isunknownUser = true;
    } catch (error) {
      console.error(error);
    }

    const new_user = await this.login.createUser({
      name: this.userNameControl.value ?? ' '
    });
  }
  
 
}
 export function VallidationNoSpace(
    nameControl: AbstractControl<any, any, any>
  ): ValidationErrors | null {
    const isSpace = /\s/.test(nameControl.value)
    return isSpace ? { NoSpace: true } : null;
  }
