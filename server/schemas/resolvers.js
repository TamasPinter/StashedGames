const { AuthenticationError } = require('apollo-server-express');
const { User, Game, HighScore1, HighScore2, HighScore3, HighScore4 } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        allUsers: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('game1')
                .populate('game2')
                .populate('game3')
                .populate('game4');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('friends')
                    .populate('game1')
                    .populate('game2')
                    .populate('game3')
                    .populate('game4');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }