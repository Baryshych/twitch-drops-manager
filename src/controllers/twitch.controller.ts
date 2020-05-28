import { Controller, Get } from '@nestjs/common';
import { TwitchService } from '../services/twitch.service';

@Controller('twitch')
export class TwitchController {
  constructor(private readonly twitchService: TwitchService) {}

  @Get('/viewers')
  getViewers(): string {
    return this.twitchService.getViewers();
  }
}
