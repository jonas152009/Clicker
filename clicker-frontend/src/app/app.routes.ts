import {Routes} from '@angular/router';
import { App } from './app';
import { Game } from '../Game/game';
import { Signin } from '../signin/signin';


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
    path: 'signin',
    component: Signin,
    title: 'Sign up page',
  },
     {
    path: '**',
    component: App,
    title: 'Home page',
  },
    
];
export default routeConfig;
