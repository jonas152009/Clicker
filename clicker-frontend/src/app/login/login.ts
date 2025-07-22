import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginAPI } from './login-api';

@Component({
  selector: 'app-login, login-reactive-favorite-color',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  username = ' ';
  isunknownUser = false;
  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('');

  private router = inject(Router);
  async doConfirmEvent() {
    this.username = this.userNameControl.value ?? '';
    const users = await this.login.getUsers();
    try {
      for (const user of users) {
        if (user.name == this.username) {
          this.router.navigate(['game']);
        }
      }
      this.isunknownUser = true;
    } catch (error) {
      console.error(error);
    }
  }
}
