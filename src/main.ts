import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const twitchJs = new TwitchJs({
  //   username: process.env.TWITCH_USER,
  //   token: process.env.TWITCH_TOKEN,
  // });
  await app.listen(3000);
}
bootstrap();
