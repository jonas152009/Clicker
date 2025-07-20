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

@Component({
  selector: 'signup-root, signup-reactive-favorite-color',
  imports: [RouterModule, ReactiveFormsModule],
  providers: [LoginAPI],
  templateUrl: './signup.html',
})
export class Signup {
  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    this.VallidationNoWhitespace,
  ]);
  private router = inject(Router);

  async doSaveEvent() {
    const res = await this.login.createUser({
      name: this.userNameControl.value ?? ' ',
      age: 1,
    });
  }
  VallidationNoWhitespace(
    nameControl: AbstractControl<any, any, any>
  ): ValidationErrors | null {
    const isWhitespace = (nameControl.value || ' ').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }
}
