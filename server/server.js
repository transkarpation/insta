// const { ApolloServer, gql } = require("apollo-server");
require('dotenv').config()
import { ApolloServer, gql } from 'apollo-server'
import {resolvers, typeDefs} from './schema'
import {getUser} from './domains/users/user.utils'

const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: async ({req}) => {
        const user = await getUser(req.headers.token)
        return {
            user
        }
    }
})

const x = (resolver) => (root, args, context, info) => {
    if(!context.user) {
        return {
            ok: false,
            error: "log in pls"
        }
    }
    return resolver(root, args, context, info)
}

const PORT = process.env.PORT

server.listen(PORT).then(() => {console.log(`listening on :${PORT}`)})
