import { Query, Mutation, Ctx, Arg } from "type-graphql";
import { Posts } from "../dtos/model/post-model";
import { Context } from "../lib/context";

export class Post {
  @Query(() => [Posts])
  async getPages(@Ctx() ctx: Context) {
    const posts = null;
  }
  @Mutation(() => Posts)
  async createPost(
    @Ctx() ctx: Context, 
    @Arg("HTML") html: string,
    @Arg("picture") picture: string,
    ) {
    
  }
}
