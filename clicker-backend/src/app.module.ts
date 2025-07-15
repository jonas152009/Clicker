import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';





mongoose.connect('mongodb://127.0.0.1:27017/app');
@Module({
  imports: [ConfigModule.forRoot(),//MongooseModule.forRoot(process.env.URI!),//
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
