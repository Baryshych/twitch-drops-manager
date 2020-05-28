import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitchService {
  getViewers(): string {
    return process.env.DATABASE_USER;
  }
}
