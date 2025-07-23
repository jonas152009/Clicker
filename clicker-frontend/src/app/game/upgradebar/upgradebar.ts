import { Component, computed, input, WritableSignal } from '@angular/core';
import { Building } from '../../Interfaces/building';

@Component({
  selector: 'app-upgradebar',
  imports: [],
  templateUrl: './upgradebar.html',
})
export class Upgradebar {
  count = input<WritableSignal<number>>();
  cookiebooster = input<Building[]>();
   
  cookieAddition(
    cookieBoosterBuilding: Building,
    count: WritableSignal<number>
  ) {
    cookieBoosterBuilding.level++;
    count.update((value) => value - cookieBoosterBuilding.cost);
    cookieBoosterBuilding.cost =
      cookieBoosterBuilding.cost * cookieBoosterBuilding.increasinValue;
    return (cookieBoosterBuilding.multiplier =
      cookieBoosterBuilding.multiplier +
      cookieBoosterBuilding.increasinMultiplier);
  }

  isenoughCookiesPerSecond = computed(
    () => this.count()!() < this.cookiebooster()![1].cost
  );
  isenoughCookiesMultiplier = computed(
    () => this.count()?.()! < this.cookiebooster()![0].cost
  );
}
