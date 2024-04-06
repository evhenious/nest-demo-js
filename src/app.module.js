import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './videos/videos.module';
import { ConfigModule } from '@nestjs/config';

import config from '../config/default';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    VideosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
