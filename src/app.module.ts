import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController, TwitchController } from './controllers';
import { AppService } from './app.service';
import { Stream, ViewerData, DropItem } from './repositories';
import { TwitchService } from './services/twitch.service';
import { StreamsResolver } from './resolvers';

const isDev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'client'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME_DEV,
      models: [Stream, ViewerData, DropItem],
      synchronize: true,
      autoLoadModels: true,
      logging: false,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: isDev,
      playground: isDev,
      introspection: isDev,
    }),
  ],
  controllers: [AppController, TwitchController],
  providers: [AppService, TwitchService, StreamsResolver],
})
export class AppModule {}
