import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Building } from '../Interfaces/building';
import { LoginAPI } from '../login/login-api';
import { User } from '../signup/user.interface';
import { CookieButton } from './cookie-button/cookie-button';
import { Upgradebar } from './upgradebar/upgradebar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ReactiveFormsModule, CookieButton, Upgradebar],
  templateUrl: './game.html',
})
export class Game {
  constructor(private readonly loginAPI: LoginAPI) {
    this.getUserbyId();
  }
  safe_ID = localStorage.getItem('0');



  cookieBooster: Building[] = [
    {
      name: 'cookieBoosterMultiplier',
      level: 0,
      multiplier: 0.5,
      cost: 100,
      increasinValue: 3,
      increasinMultiplier: 1,
    },
    {
      name: 'cookieBoosterCookiePerSecond',
      level: 0,
      multiplier: 0.5,
      cost: 50,
      increasinValue: 2,
      increasinMultiplier: 0.5,
    },
  ];

  async getUserbyId() {
    localStorage.clear();
    console.log(this.safe_ID);
    this.user = await this.loginAPI.getUser(this.safe_ID!);
    this.cookieBooster = this.user.buildings;
    this.count.update((value) => value = this.user.count);
    console.log(this.user);
  }




  user: User = {
    name: '',
    count: 0,
    buildings: this.cookieBooster,
    _id: '',
  };
    count = signal(this.user.count);
    async UpdateUser() {
    console.log(this.user);
    this.user.count = this.count();
    console.log(this.cookieBooster)
    this.user.buildings = this.cookieBooster;
    await this.loginAPI.UpdateUser(this.safe_ID!, this.user);
  }
  ngOnInit() {
    setInterval(() => {
      CookieButton.cookieProduction(this.count, this.cookieBooster);
    }, 1000);
    setInterval(() => {
      this.UpdateUser();
    }, 5000);
  }

  isenoughCookiesPerSecond = computed(
    () => this.count() < this.cookieBooster[1].cost
  );
  isenoughCookiesMultiplier = computed(
    () => this.count() < this.cookieBooster[0].cost
  );
}
