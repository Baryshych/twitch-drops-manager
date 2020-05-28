import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StreamModel {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
