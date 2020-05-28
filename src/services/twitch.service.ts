import { Injectable, HttpService } from '@nestjs/common';

import TwitchClient from 'twitch';

@Injectable()
export class TwitchService {
  constructor(private readonly httpService: HttpService) {}

  public async pickRandomViewer(channel = 'forsen'): Promise<any> {
    const { data } = await this.httpService
      .get(`https://tmi.twitch.tv/group/user/${channel}/chatters`)
      .toPromise();
    const { viewers } = data.chatters;
    const random4el = viewers[Math.floor(Math.random() * viewers.length)];

    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

    const twitchClient = TwitchClient.withClientCredentials(
      clientId,
      clientSecret,
    );
    const chelik = await twitchClient.helix.users.getUserByName(random4el);
    return chelik.id;
  }
}
