import {
 Resolver, Query, Args, Int, Mutation 
} from '@nestjs/graphql';
import { StreamModel, ViewerDataModel } from '../models';
import { DropService, TwitchService } from '../services';

@Resolver((of) => StreamModel)
export class DropResolver {
  constructor(
    private readonly dropService: DropService,
    private readonly twitchService: TwitchService,
  ) {}

  @Mutation((returns) => String)
  async pickWinner(
    @Args({ name: 'dropId', type: () => Int }) dropId: number,
    @Args({ name: 'channel', defaultValue: 'forsen' }) channel: string,
  ) {
    const viewer = await this.twitchService.pickRandomViewer(channel);
    return viewer;
    // return this.dropService.pickWinner(dropId);
  }
}
