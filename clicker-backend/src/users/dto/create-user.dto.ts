import { IsDefined, IsEmail, IsNotEmpty, IsNotIn, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
   @IsNotEmpty()
   @IsString()
   name: string;

   @IsNotEmpty()
   @IsNumber()
   age: number
  
}
