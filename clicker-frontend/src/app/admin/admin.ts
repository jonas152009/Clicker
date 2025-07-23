import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginAPI } from '../login/login-api';
import { getLocaleId } from '@angular/common';


@Component({
  selector: 'app-admin',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './admin.html',
})
export class Admin {
constructor(private readonly login: LoginAPI) {}

}
