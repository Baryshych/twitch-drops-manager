import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitchService {
  getViewers(): string {
    return '0';
  }
}
