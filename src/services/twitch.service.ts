import { Injectable, HttpService } from '@nestjs/common';

import TwitchClient from 'twitch';

// const clientId=process.env.TWITCH_CLIENT_ID
// const clientSecret=process.env.TWITCH_CLIENT_SECRET

@Injectable()
export class TwitchService {
  constructor(private readonly httpService: HttpService) {}

  public async pickRandomViewer(channel = 'forsen'): Promise<any> {
    // const twitchClient = TwitchClient.withCredentials(clientId, clientSecret);
    //
    // const q = await twitchClient.
    //
    // const chatClient = await TwitchClient.({
    //   channels: [channel],
    // });
    // await chatClient.connect();
    // await chatClient.
    // console.log(chatClient.);
    const { data } = await this.httpService
      .get(`https://tmi.twitch.tv/group/user/${channel}/chatters`)
      .toPromise();
    const { viewers } = data.chatters;
    return viewers[Math.floor(Math.random() * viewers.length)];
  }
}
