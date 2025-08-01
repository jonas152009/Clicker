import { IsBoolean, IsDefined, IsEmail, IsNotEmpty, IsNotIn, IsNumber, IsString } from "class-validator";


export class CreateUserDto {
   @IsNotEmpty()
   @IsString()
   name: string;
   @IsNotEmpty()
   @IsString()
   password: string;
   @IsNotEmpty()
   @IsBoolean()
   playedBefore: boolean;

  
}