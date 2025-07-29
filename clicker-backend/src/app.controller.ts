import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import{Response} from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("cookies")
   findAll(@Req() request: Request, response: Response) {
  console.log(response.cookie("0",request)); // or "request.cookies['cookieKey']"
  // or console.log(request.signedCookies);
}
}

