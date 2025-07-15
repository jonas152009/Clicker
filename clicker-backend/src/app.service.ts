import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.USER_NAME || "Hello World!";
  }

}
