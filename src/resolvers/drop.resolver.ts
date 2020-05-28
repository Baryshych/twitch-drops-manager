import {
 Resolver, Query, Args, Int, Mutation 
} from '@nestjs/graphql';
import { StreamModel, DropItemModel } from '../models';
import { DropService, TwitchService } from '../services';
import { DropItem } from '../repositories';

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
    const dropItem = await DropItem.findByPk(dropId);
    if (!dropItem) throw new Error('No drop found');
    if (dropItem.viewer) throw new Error('Drop already has viewer');
    const viewer = await this.twitchService.pickRandomViewer(channel);
    dropItem.viewer = viewer;
    await dropItem.save();
    return viewer;
    // return this.dropService.pickWinner(dropId);
  }

  @Query((returns) => [DropItemModel])
  async dropItems(@Args({ name: 'viewer' }) viewer: string) {
    const dropItems = await DropItem.findAll({
      where: {
        viewer,
      },
    });
    return dropItems;
  }
}
