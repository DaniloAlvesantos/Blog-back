import { Field, InputType } from "type-graphql";


@InputType()
export class PostInput {
    @Field()
    id: String
    @Field()
    title:String
    @Field()
    background_pic: String
    @Field()
    publishedAt: Date
    @Field()
    content:JSON | String
}