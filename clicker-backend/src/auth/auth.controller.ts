import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';
import{Request} from 'express'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    
 @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginUserDto:LoginUserDto ) {
    
    return  await this.authService.login(loginUserDto.name, loginUserDto.password);
   
  }
  @Get()
  Cookietest(@Req() req: Request){
   return  this.authService.proofJWT(req)
  }
}
