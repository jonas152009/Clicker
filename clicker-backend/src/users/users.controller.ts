import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import{Request} from 'express'
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 
@Get()
findAllUser(request: Request){
  if(this.usersService.proofJWT(request))
    {
      return this.usersService.findAllUser();
     
    }else{ return "Error 401 unauthorized"}
   
  }
  

@Get(':name')
getUser(@Param('name') name: string){
  return this.usersService.getUser(name)
}
  
  @Post('signup')
  signupUser(@Body() user:{username: string, password: string}) {
    console.log(user.username)
    return this.usersService.signupUser(user.username, user.password);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto,@Req() request: Request ) 
  {
    
    if(this.usersService.proofJWT(request))
    {
     this.usersService.update(id, updateUserDto);
     return true;
    }
    return false;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
