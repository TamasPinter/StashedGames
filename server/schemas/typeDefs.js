const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        location: String
        picture: String
        game1: [HighScore1]
        game2: [HighScore2]
        game3: [HighScore3]
        game4: [HighScore4]
        friends: [User]
        friendCount: Int
    }
    
    type Game {
        _id: ID
        name: String
        description: String
        image: String
    }
    
    type HighScore1 {
        _id: ID
        user_id: ID
        game_id: ID
        score: Int
    }

    type HighScore2 {
        _id: ID
        user_id: ID
        game_id: ID
        score: Int
    }

    type HighScore3 {
        _id: ID
        user_id: ID
        game_id: ID
        score: Int
    }

    type HighScore4 {
        _id: ID
        user_id: ID
        game_id: ID
        score: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allUsers: [User]
        user(_id: ID!): User
        allGames: [Game]
        game(_id: ID!): Game
        allHighScores1: [HighScore1]
        highScore1(_id: ID!): HighScore1
        allHighScores2: [HighScore2]
        highScore2(_id: ID!): HighScore2
        allHighScores3: [HighScore3]
        highScore3(_id: ID!): HighScore3
        allHighScores4: [HighScore4]
        highScore4(_id: ID!): HighScore4
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(_id: ID!, username: String, email: String, password: String, location: String, picture: String): User
        addFriend(_id: ID!, friendId: ID!): User
        removeFriend(_id: ID!, friendId: ID!): User
        updateHighScore1(_id: ID!, user_id: ID!, game_id: ID!, score: Int): HighScore1
        updateHighScore2(_id: ID!, user_id: ID!, game_id: ID!, score: Int): HighScore2
        updateHighScore3(_id: ID!, user_id: ID!, game_id: ID!, score: Int): HighScore3
        updateHighScore4(_id: ID!, user_id: ID!, game_id: ID!, score: Int): HighScore4
        deleteUser(_id: ID!): User
    }`;

module.exports = typeDefs;