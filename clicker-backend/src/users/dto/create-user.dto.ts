import { IsDefined, IsEmail, IsNotEmpty, IsNotIn, IsNumber, IsString } from "class-validator";
import { Building } from "../interface/Building";

export class CreateUserDto {
   @IsNotEmpty()
   @IsString()
   name: string;

  
}