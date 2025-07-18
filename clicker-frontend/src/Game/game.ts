import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './game.html',
})
export class Game {
  counter = 0;

  doClickEvent() {
    this.counter++;
  }
}
