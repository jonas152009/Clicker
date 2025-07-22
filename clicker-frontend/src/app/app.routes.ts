import { Routes } from '@angular/router';

import { Admin } from './admin/admin';
import { Game } from './game/game';
import { Login } from './login/login';
import { Signup } from './signup/signup';

const routeConfig: Routes = [
  {
    path: 'game',
    component: Game,
    title: 'Game page',
  },
  {
    path: 'signup',
    component: Signup,
    title: 'Sign up page',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login page',
  },
  {
    path: 'admin',
    component: Admin,
    title: 'Admin page',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
export default routeConfig;
