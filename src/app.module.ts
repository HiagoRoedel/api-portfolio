import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    ContactModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.BANCO_HIAGO || ''),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
