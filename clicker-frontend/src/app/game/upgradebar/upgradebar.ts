import { Component, computed, input, WritableSignal } from '@angular/core';
import { Building } from '../Interfaces/building';

@Component({
  selector: 'app-upgradebar',
  imports: [],
  templateUrl: './upgradebar.html',
})
export class Upgradebar {
count = input<WritableSignal<number>>();

  static cookieBooster: Building[] = [
    {
      name: 'cookieBoosterMultiplier',
      level: 0,
      multiplier: 0.5,
      cost: 100,
      cookieAddition: (
        cookieBoosterBuilding: Building,
        count: WritableSignal<number>
      ) => {
        cookieBoosterBuilding.level++;
        count.update((value) => value - cookieBoosterBuilding.cost);
        cookieBoosterBuilding.cost = cookieBoosterBuilding.cost * 3;
        return (cookieBoosterBuilding.multiplier =
          cookieBoosterBuilding.multiplier + 1);
      },
    },
    {
      name: 'cookieBoosterCookiePerSecond',
      level: 0,
      multiplier: 0.5,
      cost: 50,
      cookieAddition: (
        cookieBoosterBuilding: Building,
        count: WritableSignal<number>
      ) => {
        cookieBoosterBuilding.level++;
        count.update((value) => value - cookieBoosterBuilding.cost);
        cookieBoosterBuilding.cost = cookieBoosterBuilding.cost * 2;
        return (cookieBoosterBuilding.multiplier = 
          cookieBoosterBuilding.multiplier + 0.5
        );
      },
    },
  ];
  cookiebooster = Upgradebar.cookieBooster;
    isenoughCookiesPerSecond = computed(
    () => this.count()!() < Upgradebar.cookieBooster[1].cost
  );
  isenoughCookiesMultiplier = computed(
    () => this.count()?.()! < Upgradebar.cookieBooster[0].cost
  );

}
