import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Posts {
  @Field()
  title: String;
  @Field()
  background_pic: String;
  @Field()
  publishedAt: Date;
  @Field()
  content: JSON | String;
}
