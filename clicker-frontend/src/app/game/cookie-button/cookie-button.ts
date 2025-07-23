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

  static cookieProduction(
    count: WritableSignal<number>,
    cookieBooster: Building[]
  ) {
    count.update(
      (value) =>
        value +
        
          cookieBooster.reduce((a, b) => {
            return a + b.multiplier;
          }, 0)
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
  }
}
