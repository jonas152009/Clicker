import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}
  async login(username: string) {
    try {
      const users = await this.userService.findAllUser();
      for (var user of users) {
        if (user.name == username) {
          return this.createJwt(user);
        }
      }
      return {
        headpayload: null,
        signature: null,
      };
    } catch (error) {
      console.error('found nobody', error);
    }
  }

  async createJwt(user: any) {
    const payload = {
      sub: user.id,
      name: user.name,
      playedBefore: user.playedBefore,
    };

    const access_token = await this.jwtService.sign(payload, {
      expiresIn: '20s',
    });
    const splitedToken = access_token.split('.');
    const headPayload = splitedToken[0] + '.' + splitedToken[1];
    const signature = splitedToken[2];
    return { headpayload: headPayload, signature: signature };
  }
  proofJWT(request: Request) {
    const fullToken = request.cookies['hp'] + '.' + request.cookies['s'];
    console.log(fullToken);
    try {
      this.jwtService.verify(fullToken);
    } catch (error) {
      return false;
    }
    return true;
  }
}
