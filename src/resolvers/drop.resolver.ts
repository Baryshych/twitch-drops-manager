import {
  Resolver, Query, Args, Int, Mutation,
} from '@nestjs/graphql';
import { StreamModel, ViewerDataModel } from '../models';
import { DropService } from '../services';

// import { TwitchService } from '../services';

@Resolver((of) => StreamModel)
export class DropResolver {
  constructor(
    private readonly dropService: DropService,
  ) {}


  @Mutation((returns) => ViewerDataModel)
  async pickWinner(@Args({ name: 'dropId', type: () => Int }) dropId: number) {
    return this.dropService.pickWinner(dropId);
  }
}
