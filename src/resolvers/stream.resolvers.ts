import {
  Resolver, Query, Args, Int,
} from '@nestjs/graphql';
import { StreamModel } from '../models';
// import { TwitchService } from '../services';

@Resolver((of) => StreamModel)
export class StreamsResolver {
  constructor(
    // private twitchService: TwitchService,
  ) {}

  @Query((returns) => StreamModel)
  async author(@Args('id', { type: () => Int }) id: number) {
    // return this.twitchService.getViewers();
    return 'this.twitchService.getViewers()';
  }
}
