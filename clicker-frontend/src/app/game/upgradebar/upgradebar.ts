import { Component, computed, input, WritableSignal } from '@angular/core';
import { Building } from '../../Interfaces/building';

@Component({
  selector: 'app-upgradebar',
  imports: [],
  templateUrl: './upgradebar.html',
})
export class Upgradebar {
  Isshop1On = false;
  Isshop2On = false;
  count = input<WritableSignal<number>>();
  cookieBooster = input<Building[]>([]);
  shops = input<Building[]>([]);

  ngOnInit() {
    console.log(this.cookieBooster());
  }
  cookieAddition(
    cookieBoosterBuilding: Building,
    count: WritableSignal<number>
  ) {
    cookieBoosterBuilding.level++;
    count.update((value) => value - cookieBoosterBuilding.cost);
    cookieBoosterBuilding.cost =
      cookieBoosterBuilding.cost * cookieBoosterBuilding.increasinValue;
    cookieBoosterBuilding.multiplier =
      cookieBoosterBuilding.multiplier +
      cookieBoosterBuilding.increasinMultiplier;
  }
  shopBoost(shop: Building, count: WritableSignal<number>) {
    shop.level++;
    count.update((value) => value - shop.cost);
    shop.cost = shop.cost * shop.increasinValue;
    shop.multiplier = shop.increasinMultiplier;
    shop.increasinMultiplier = shop.increasinMultiplier + 5;
    setTimeout(() => {
      shop.multiplier = 0;
    }, 10000);
  }

  isenoughCookiesShop2 = computed(
    () =>
      this.count()!() < this.shops()![1].cost ||
      this.shops()![1].multiplier != 0
  );
  isenoughCookiesShop1 = computed(
    () =>
      this.count()!() < this.shops()![0].cost ||
      this.shops()![0].multiplier != 0
  );
  isenoughCookiesFactorie3 = computed(
    () => this.count()!() < this.cookieBooster()![2].cost
  );
  isenoughCookiesPerSecond = computed(
    () => this.count()!() < this.cookieBooster()![1].cost
  );
  isenoughCookiesMultiplier = computed(
    () => this.count()?.()! < this.cookieBooster()![0].cost
  );
}
