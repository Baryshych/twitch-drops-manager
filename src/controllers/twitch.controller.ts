import { Controller, Get } from '@nestjs/common';
import { TwitchService } from '../services';

@Controller('twitch')
export class TwitchController {
  constructor(private readonly twitchService: TwitchService) {}

  @Get('/viewers')
  pickRandomViewer(): any {
    return this.twitchService.pickRandomViewer();
  }
}
