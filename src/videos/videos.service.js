import { Injectable } from '@nestjs/common';

import knexLib from 'knex';

@Injectable()
export class VideosService {

  constructor() {
    this.knex = knexLib({
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'test',
        database: 'videostorage',
      }
    });
  }

  getAllVideos() {
    return this.knex.select().from('videos');
  }
}
