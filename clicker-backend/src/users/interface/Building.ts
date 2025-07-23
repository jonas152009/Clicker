

type buildingsName= "cookieBoosterMultiplier" | "cookieBoosterCookiePerSecond"
export interface Building{
    name: buildingsName;
    level: number;
    multiplier: number;
    cost: number;
    increasinValue: number;
    increasinMultiplier: number;

}