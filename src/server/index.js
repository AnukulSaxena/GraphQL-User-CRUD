import express from 'express';
import { ApolloServer } from '@apollo/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from '../graphql/schema.js';
import dotenv from 'dotenv'
import resolvers from '../user/userResolver.js'

dotenv.config({
    path: '../../.env'
})
const app = express();
app.use(bodyParser.json());
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
    app.use('/graphql', expressMiddleware(server))
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
            app.listen(process.env.PORT, () => {
                console.log('Server started at http://localhost:' + process.env.PORT);
            });
        })
        .catch(error => console.error('Error connecting to MongoDB:', error));
});
