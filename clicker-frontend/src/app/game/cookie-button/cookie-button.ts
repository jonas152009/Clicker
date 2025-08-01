import { Component, input, WritableSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Building } from '../../Interfaces/building';

@Component({
  selector: 'app-cookie-button',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './cookie-button.html',
})
export class CookieButton {
  count = input<WritableSignal<number>>();
  cookieBooster = input<Building[]>();
  shops = input<Building[]>();
  highscore = 0;

  static cookieProduction(
    count: WritableSignal<number>,
    cookieBooster: Building[],
    shops: Building[]
  ) {
    const shopMultiplier = shops.reduce((a, b) => {
      return a + b.multiplier;
    }, 0);

    count.update(
      (value) =>
        value +
        cookieBooster.reduce((a, b) => {
          return a + b.multiplier;
        }, 0) +
        shopMultiplier
    );
  }

  doClickAddCookies() {
    this.count()?.update(
      (value) =>
        value +
        Math.round(
          this.cookieBooster()!.reduce((a, b) => {
            return a + b.multiplier;
          }, 1)
        )
    );
    this.profCount();
  }
  profCount() {
    const cookie = document.getElementById('Cookie');

    const count = this.count()!();

    if (count > this.highscore) {
      this.highscore = count;
    }
  }

  getCookieImage(): string {
    if (this.highscore > 2000) {
      return 'https://piskel-imgstore-b.appspot.com/img/fd09ce94-6e03-11f0-bfae-dfcd6ab0b5c0.gif';
    } else if (this.highscore > 1000) {
      return 'https://piskel-imgstore-b.appspot.com/img/dc8f7394-6e03-11f0-b7ab-dfcd6ab0b5c0.gif';
    } else {
      return 'https://piskel-imgstore-b.appspot.com/img/33e66335-6d3d-11f0-85b6-b5db701079ac.gif';
    }
  }
}
