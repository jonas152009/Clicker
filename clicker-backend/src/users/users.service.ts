import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';


@Injectable()
export class UsersService {
  users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user: User ={name: createUserDto.name, age: createUserDto.age};
    this.users.push(user);
    return createUserDto;
  }
  getusers_Document(userDocument: UserDocument)
  {
    return JSON.stringify(userDocument);
  }
  findAll() {
    return this.users;
  }

  findOne(id: number, ) {
    return this.users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndexOutOfRange = id > this.users.length && id < 0;
    if (userIndexOutOfRange) {
      return;
    }

    this.users[id].name = updateUserDto.name ?? this.users[id].name;
    this.users[id].age = updateUserDto.age ?? this.users[id].age;
  }

  remove(id: number) {
    this.users.splice(id);
  }
}
