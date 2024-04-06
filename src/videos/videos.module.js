import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [VideosController],
  providers: [VideosService, ConfigService]
})

export class VideosModule {}
