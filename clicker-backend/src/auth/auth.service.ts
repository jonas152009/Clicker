import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
 
  constructor(
     private jwtService: JwtService, private userService: UsersService
  ) {}
  async login(username: string) {
    
    try {
     const users =  await this.userService.findAllUser();
      for (var user of users) {
        if (user.name == username) {
       return this.createJwt(user);
        }
      }
      return {
	headpayload: null,
	signature: null
}
    } catch (error) {
      console.error('found nobody', error);
    }
  }

  async createJwt(user: any){
    const payload = {sub: user.id, name: user.name, playedBefore: user.playedBefore}
           
            
        const access_token = await this.jwtService.signAsync(payload);
       const  splitedToken = access_token.split(".");
        const headPayload = splitedToken[0] + "."+splitedToken[1]+ "";
        const signature = splitedToken[2]
        return {headpayload: headPayload, signature: signature}
                
            
  }
  proofJWT(){
    
  }
}
