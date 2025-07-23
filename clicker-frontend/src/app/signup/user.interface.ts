import { Building } from '../Interfaces/building';

export interface User {
  _id: string;
  name: string;
  count: number;
  buildings: Building[];
  playedBefore: boolean;
}
