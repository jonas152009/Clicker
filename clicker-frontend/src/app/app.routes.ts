import {Routes} from '@angular/router';
import { App } from './app';

import {Signup } from './signin/signup';
import { Game } from './signin/Game/game';
import { Login } from './login/login';
import { Admin } from './admin/admin';


const routeConfig: Routes = [
  {
    path:'game',
    component:Game,
    title:'Game page'
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
  },{
    path: 'admin',
    component: Admin,
    title: 'Admin page',
  },
     {
    path: '**',
    component: App,
    title: 'Home page',
  },
    
];
export default routeConfig;
