// const { ApolloServer, gql } = require("apollo-server");
import { PrismaClient } from '.prisma/client';
import { ApolloServer, gql } from 'apollo-server'

const client = new PrismaClient()

const typeDefs = gql`
    type Movie {
        id: Int,
        title: String,
        year: Int,
        genre: String,
        createdAt: String,
        updatedAt: String
    }

    type Query {
        movies: [Movie],
        movie: Movie
    }

    type Mutation {
        createMovie(title:String!, year: Int!, genre: String): Movie,
        deleteMovie(title: String!): Boolean
    }
`;

const resolvers = {
    Query: {
        movies: () => client.movie.findMany(),
        movie: () => ({title: 'Hello', year: 2021})
    },
    Mutation: {
        createMovie: (_, {title, year, genre}) => {
            return client.movie.create({
                data: {
                    title,
                    year,
                    genre
                }
            })
            // return true
        },
        deleteMovie: (_, {}) => {

            return true
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(() => {console.log("listening on :4000")})
