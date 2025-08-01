import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Building } from '../interface/Building';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
 
  @Prop()
  name: string;
   @Prop()
  password: string;
  @Prop()
  buildings: Building[];
   @Prop()
  shopsBooster: Building[];
  @Prop()
  count: number;
  @Prop()
  playedBefore: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
