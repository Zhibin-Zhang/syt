import express from 'express';
import graphqlHTTP from 'express-graphql';
import {buildSchema} from 'graphql';

const router = express.Router();

const enrollmentSchema = buildSchema(`
type User {
    id: String!
    userName: String!
    name: String!
    islandName: String!
    hemisphere: String!
    fruitType: String!
}

type Query {
        status(id: String!): Boolean
        user(id: String!): User
    }

type Mutation {
    
}
`);

router.get('/enrollment', (req, res) => {

});