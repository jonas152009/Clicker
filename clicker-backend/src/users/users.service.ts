import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      await createdUser.save();
      return createUserDto;
    } catch (error) {
      console.error('failed creating User', error);
    }
  }

  findAll() {
    try {
      return this.userModel.find();
    } catch (error) {
      console.error('failed to find all', error);
    }
  }

  async findOne(id: string) {
    try {
      console.log(id);
      const result = await this.userModel.findById(id).exec();
      return result;
    } catch (error) {
      console.error('found nobody', error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
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
}
