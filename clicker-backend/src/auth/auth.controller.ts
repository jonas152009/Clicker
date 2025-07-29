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
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    
 @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginUserDto:LoginUserDto ) {
    
    return  await this.authService.login(loginUserDto.name);
   
  }
}
