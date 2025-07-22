import { WritableSignal } from "@angular/core";
import { CookieButton } from "../cookie-button/cookie-button";

type buildingsName= "cookieBoosterMultiplier" | "cookieBoosterCookiePerSecond"
export interface Building{
    name: buildingsName;
    level: number;
    multiplier: number;
    cost: number;
    cookieAddition: (cookieBoosterBuilding: Building, count: WritableSignal<number>) => void;

}