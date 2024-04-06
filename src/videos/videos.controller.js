import { Dependencies, Bind, Body, Controller, Get, Post, Param, HttpCode } from '@nestjs/common';
import { VideosService } from './videos.service';

// localhost:3000/api/videos
@Controller('api/videos')
@Dependencies(VideosService)
export class VideosController {

  /**
   * @param {VideosService} videosService
   */
  constructor(videosService) {
    this.videosService = videosService;
  }


  // localhost:3000/api/videos
  @Get()
  @HttpCode(213)
  getAllVideos() {
    return this.videosService.getAllVideos();
  }

  @Post()
  @Bind(Body())
  addNewVideo(body) {
    console.log(body)
    return 'add new video';
  }

  // .../api/videos/:id
  @Get(':id')
  @Bind(Param('id'))
  getById(id) {
    return `We have ${id} as video ID`;
  }

}
