import {Routes} from '@angular/router';
import { App } from './app';

import {Signup } from './signup/signup';
import { Game } from './Game/game';
import { Login } from './login/login';


const routeConfig: Routes = [
  {
    path: '',
    component: App,
    title: 'Home page',
  },
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
  },
     {
    path: '**',
    component: App,
    title: 'Home page',
  },
    
];
export default routeConfig;
