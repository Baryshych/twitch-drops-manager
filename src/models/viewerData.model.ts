import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ViewerDataModel {
  @Field()
  twitchUsername: string;

  @Field()
  tradeLink: string;
}
