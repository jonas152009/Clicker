import { Component, inject } from '@angular/core';
import { LoginAPI } from './login-api';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login, login-reactive-favorite-color',
imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  username = ' ';

  constructor(private readonly login: LoginAPI) {}

  userNameControl = new FormControl('ffff');
  private router = inject(Router);
  async doSaveEvent() {
    this.username = this.userNameControl.value ?? '';

    const users = await this.login.getUsers();
    for (const user of users) {
      if (user.name == this.username) {
        this.router.navigate(['game']);
      }
    }
  }
}
