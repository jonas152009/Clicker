import { BuiltinType } from '@angular/compiler';
import { Component, inject, signal } from '@angular/core';
import { bootstrapAppScopedEarlyEventContract } from '@angular/core/primitives/event-dispatch';
import { Router, RouterOutlet, Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import { Game } from '../Game/game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',

  
})
export class App {
  private router = inject(Router);
  constructor()
  {
    this.navigateToGame();
  }
  navigateToGame()
  {
    this.router.navigate(['signin']);
  }
 
}
