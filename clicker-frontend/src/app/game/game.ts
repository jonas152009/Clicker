import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './game.html',
})
export class Game implements OnInit {
  count = 0;
  isEnoughCookiesforMultiplier = true;
  isEnoughCookiesforCookiespc = true;
  cookiespc = 1;
  multiplier = 1;
  multiplierPrice = 100;
  cookiespcPrice = 50;

  ngOnInit() {
    setInterval(() => {
      this.cookieProduction();
    }, 1000);
    setInterval(() => {
      this.controlenoughCookies();
    }, 100);
  }

  cookieProduction() {
    this.count = Math.round(this.count + this.cookiespc * this.multiplier);
  }

  doClickAddCookies() {
    this.count = Math.round(this.count + this.cookiespc * this.multiplier);
  }

  doBiggerMultiplier() {
    this.count = this.count - this.multiplierPrice;
    this.multiplier = Math.round(this.multiplier * 1.5);
    this.multiplierPrice = this.multiplierPrice * 2;
  }
  doMoreCookiespc() {
    this.count = this.count - this.cookiespcPrice;
    this.cookiespc = this.cookiespc * 2;
    this.cookiespcPrice = this.cookiespcPrice * 2;
  }
  controlenoughCookies() {
    this.isEnoughCookiesforMultiplier = (this.count < this.multiplierPrice);

    this.isEnoughCookiesforCookiespc = (this.count < this.cookiespcPrice);


  
    interface Building {
      name: string;
      cost: number
    }

    interface CookieBooster extends Building {
      cookieAddition: () => number
    }
    const cb: CookieBooster = {
      name: 'CookieBooster',
      cost: 0,
      cookieAddition: () => 7
    } 

    const t: Building[] = [{
      name: 'kaloo',
      cost: 0,
    }, cb]
      }
}
