import Path from "path"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { Post } from "./src/resolves/post"
import { context } from "./src/lib/context"

async function main() {
    const schema = await buildSchema({
        resolvers: [
            Post
        ],
        emitSchemaFile: Path.resolve(__dirname, "schma.gql")
    })

    const server = new ApolloServer({
        schema,
        context
    })

    const { url } = await server.listen()
    console.log("Server Running on " + url)
}

main()