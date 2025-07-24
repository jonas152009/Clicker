import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  productionInterval: any;
  updateInterval: any;
  private router = inject(Router);
  constructor(private readonly loginAPI: LoginAPI) {
    if(sessionStorage.getItem("0") == null)
    {
      this.router.navigate(['login']);
    }
    this.getUserbyId();
  }
  safe_ID = localStorage.getItem('0');

  cookieBooster: Building[] = [
    {
      name: 'cookieBoosterMultiplier',
      level: 0,
      multiplier: 0,
      cost: 100,
      increasinValue: 3,
      increasinMultiplier: 2,
    },
    {
      name: 'cookieBoosterCookiePerSecond',
      level: 0,
      multiplier: 0,
      cost: 50,
      increasinValue: 2,
      increasinMultiplier: 1,
    },
  ];
  user: User = {
  _id: "",
  name: "",
  count: 0,
  buildings: this.cookieBooster,
  playedBefore: false
  };

  async getUserbyId() {
    console.log(this.safe_ID);
    this.user = await this.loginAPI.getUser(this.safe_ID!);
    if(this.user.playedBefore){

    this.cookieBooster = this.user.buildings;
    this.count.update((value) => (value = this.user.count));
    console.log(this.user);
    }else{
      this.user.buildings = this.cookieBooster;
      this.user.count = this.count();
      this.user.playedBefore = true;
    }
  }


  count = signal(this.user.count);
  async UpdateUser() {
    console.log(this.user.name)
    console.log(this.user);
    this.user.count = this.count();
    console.log(this.cookieBooster);
    this.user.buildings = this.cookieBooster;
    await this.loginAPI.UpdateUser(this.safe_ID!, this.user);
  }
  ngOnInit() {
    this.productionInterval =  setInterval(() => {
      CookieButton.cookieProduction(this.count, this.cookieBooster);
    }, 1000);
    this.updateInterval = setInterval(() => {
      this.UpdateUser();
    }, 5000);
  }
  ngOnDestroy(){
    sessionStorage.clear();
    clearInterval(this.productionInterval);
    clearInterval(this.updateInterval);
  }
}
