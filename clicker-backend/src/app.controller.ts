import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import{Request} from 'express'


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('cookies')
  json(@Req() req: Request){
    console.log(req.cookies)
    return req.cookies
  }
}

