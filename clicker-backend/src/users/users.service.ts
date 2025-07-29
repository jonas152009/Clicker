import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      await createdUser.save();
      return createUserDto;
    } catch (error) {
      console.error('failed creating User', error);
    }
  }

  async signupUser(username: string) {
    try {
      const users = await this.userModel.find();
      for (var user of users) {
        if (user.name == username) {
          return;
        }
        return this.createUser({ name: username, playedBefore: false });
      }
    } catch (error) {
      console.error('failed to find all', error);
    }
  }

  async findAllUser() {
    const users = await this.userModel.find().exec();
    return users;
  }

  

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      console.log("update user")
      const updatetuser = await this.userModel.findByIdAndUpdate(
        id,
        updateUserDto,
      );
      return updatetuser;
    } catch (error) {
      console.log('Update failed', error);
    }
  }

  async remove(id: string) {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
      return deletedUser;
    } catch (error) {
      console.log('Deleting failed', error);
    }
  }
  async getUser(username: string) {
    const users = await this.findAllUser();
    for (var user of users) {
      if (user.name == username) {
        return user;
      }

      
    }
    return ' Error no User';
  }
}
