import { Component, computed, input, WritableSignal } from '@angular/core';
import { Building } from '../../Interfaces/building';

@Component({
  selector: 'app-upgradebar',
  imports: [],
  templateUrl: './upgradebar.html',
})
export class Upgradebar {
  count = input<WritableSignal<number>>();
   cookieBooster = input<Building[]>();
   shops = input<Building[]>();
  
   ngOnInit(){
    console.log(this.cookieBooster())
   }
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

     isenoughCookiesShop2 = computed(
    () => this.count()!() < this.shops()![1].cost
  );
     isenoughCookiesShop1 = computed(
    () => this.count()!() < this.shops()![0].cost
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
