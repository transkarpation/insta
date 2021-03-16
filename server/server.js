// const { ApolloServer, gql } = require("apollo-server");
require('dotenv').config()
import { ApolloServer, gql } from 'apollo-server'
import schema from './schema'
import {getUser} from './domains/users/user.utils'

const server = new ApolloServer({
    schema,
    context: async ({req}) => {
        const user = await getUser(req.headers.token)
        return {
            user
        }
    }
})

const PORT = process.env.PORT

server.listen(PORT).then(() => {console.log(`listening on :${PORT}`)})
