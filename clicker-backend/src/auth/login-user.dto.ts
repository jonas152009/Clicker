import { IsBoolean, IsDefined, IsEmail, IsNotEmpty, IsNotIn, IsNumber, IsString } from "class-validator";


export class LoginUserDto {
   @IsNotEmpty()
   @IsString()
   name: string;

    @IsNotEmpty()
   @IsString()
   password: string;
}