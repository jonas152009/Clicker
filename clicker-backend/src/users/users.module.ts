import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { jwtConstants } from 'src/auth/constants';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),   JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '20s' },
      }),],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {
   configure(consumer: MiddlewareConsumer) {
    
   }
}
