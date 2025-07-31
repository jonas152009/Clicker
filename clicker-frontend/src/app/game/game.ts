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
  CostsInterval:any
  private router = inject(Router);
  constructor(private readonly loginAPI: LoginAPI) {
    if (sessionStorage == null) {
      this.router.navigate(['login']);
    }
    this.loadSaveGame();
  }
  safe_ID = sessionStorage.getItem('0');

  cookieBooster: Building[] = [
    {
      name: 'Factory1',
      level: 0,
      multiplier: 0,
      cost: 100,
      increasinValue: 3,
      increasinMultiplier: 2,
    },
    {
      name: 'Facrory2',
      level: 0,
      multiplier: 0,
      cost: 50,
      increasinValue: 2,
      increasinMultiplier: 1,
    },
    {
      name: 'Facrory3',
      level: 100,
      multiplier: 0,
      cost: 10,
      increasinValue: 3,
      increasinMultiplier: 1,
    },
  ];
  shops: Building[]= [   {
      name: 'Shop1',
      level: 0,
      multiplier: 12,
      cost: 50,
      increasinValue: 3,
      increasinMultiplier: 3,
    },
    {
      name: 'Shop2',
      level: 0,
      multiplier: 10,
      cost: 50,
      increasinValue: 2,
      increasinMultiplier: 1,
    },]
  user: User = {
  _id: "",
  name: "",
  count: 0,
  buildings: this.cookieBooster,
  playedBefore: false
  };
  async getUserbyName() {
    const user = await this.loginAPI.getUser(sessionStorage.getItem('name')!);
    return user;
  }

  async loadSaveGame() {
    this.user = await this.getUserbyName();
    if (this.user.playedBefore) {
      this.cookieBooster = this.user.buildings;
      this.count.update((value) => (value = this.user.count));
      console.log(this.user);
    } else {
      console.log(this.user._id);
      this.user.buildings = this.cookieBooster
      this.user.count = this.count();
      this.user.playedBefore = true;
    }
    console.log(this.user);
  }

  count = signal(this.user.count);
 
  async Update() {
    this.user.count = this.count();
    console.log(this.user);
    this.user.buildings = this.cookieBooster;
    const access_token = await this.loginAPI.loginUser(
      sessionStorage.getItem('name')!
    );
    document.cookie = 'hp' + '=' + access_token.headpayload + '; path=/';
    document.cookie = 's' + '=' + access_token.signature + '; path=/';
    const verifiedJWT = await this.loginAPI.UpdateUser(
      this.user._id,
      this.user
    );
    if (verifiedJWT == false) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.productionInterval = setInterval(() => {
      CookieButton.cookieProduction(this.count, this.cookieBooster);
    }, 1000);
    this.updateInterval = setInterval(() => {
      this.Update();
    }, 5000);
   
  }

  ngOnDestroy() {
    clearInterval(this.productionInterval);
    clearInterval(this.updateInterval);
   
  }
}
