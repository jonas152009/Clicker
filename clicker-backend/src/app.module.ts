import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { config } from 'process';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async  (configService: ConfigService) => ({ uri: configService.get<string>('URI'),
    }),
    inject: [ConfigService],
  }),
  UsersModule,
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
