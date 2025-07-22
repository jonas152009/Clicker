import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieButton } from './cookie-button/cookie-button';
import { Upgradebar } from './upgradebar/upgradebar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ReactiveFormsModule, CookieButton, Upgradebar],
  templateUrl: './game.html',
})
export class Game {
  count = signal(0);
  cookieBooster = Upgradebar.cookieBooster;
  ngOnInit() {
    setInterval(() => {
      CookieButton.cookieProduction(this.count, this.cookieBooster);
    }, 1000);
  }

  isenoughCookiesPerSecond = computed(
    () => this.count() < this.cookieBooster[1].cost
  );
  isenoughCookiesMultiplier = computed(
    () => this.count() < this.cookieBooster[0].cost
  );
}
