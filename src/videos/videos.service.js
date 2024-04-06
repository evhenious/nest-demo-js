import { Injectable, Dependencies } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import knexLib from 'knex';

@Injectable()
@Dependencies(ConfigService)
export class VideosService {

  constructor(configService) {
    this.configService = configService;

    this.knex = knexLib(
      this.configService.get('db')
    );
  }

  getAllVideos() {
    return this.knex.select().from('videos');
  }
}
