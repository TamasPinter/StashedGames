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
        },
        allGames: async () => {
            return Game.find();
        },
        game: async (parent, args, context) => {
            if (context.user) {
                const gameData = await Game.findOne({ _id: args.gameId })
                    .select('-__v')
                    .populate('game1')
                    .populate('game2')
                    .populate('game3')
                    .populate('game4');

                return gameData;
            }
        },
        allHighScores1: async () => {
            return HighScore1.find();
        },
        allHighScores2: async () => {
            return HighScore2.find();
        },
        allHighScores3: async () => {
            return HighScore3.find();
        },
        allHighScores4: async () => {
            return HighScore4.find();
        },
        highScore1: async (parent, args, context) => {
            if (context.user) {
                const highScoreData = await HighScore1.findOne({ _id: args.highScoreId })
                    .select('-__v')
                    .populate('game1')
                    .populate('user_id');

                return highScoreData;
            }
        },
        highScore2: async (parent, args, context) => {
            if (context.user) {
                const highScoreData = await HighScore2.findOne({ _id: args.highScoreId })
                    .select('-__v')
                    .populate('game2')
                    .populate('user_id');

                return highScoreData;
            }
        },
        highScore3: async (parent, args, context) => {
            if (context.user) {
                const highScoreData = await HighScore3.findOne({ _id: args.highScoreId })
                    .select('-__v')
                    .populate('game3')
                    .populate('user_id');

                return highScoreData;
            }
        },
        highScore4: async (parent, args, context) => {
            if (context.user) {
                const highScoreData = await HighScore4.findOne({ _id: args.highScoreId })
                    .select('-__v')
                    .populate('game4')
                    .populate('user_id');

                return highScoreData;
            }
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect Email');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password');
            }
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, {
                    new: true,
                });
            }
            throw new AuthenticationError('Not logged in');
        },
        addFriend: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: args.friendId } },
                    { new: true }
                ).populate('friends');
            }
            throw new AuthenticationError('Not logged in');
        },
        removeFriend: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: args.friendId } },
                    { new: true }
                ).populate('friends');
            }
            throw new AuthenticationError('Not logged in');
    },
    updateHighScore1: async (parent, args, context) => {
        if (context.user) {
            const highScore = await HighScore1.create(args);
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { game1: highScore._id } },
                { new: true }
            ).populate('game1');
            return highScore;
        }
        throw new AuthenticationError('Not logged in');
    },
    updateHighScore2: async (parent, args, context) => {
        if (context.user) {
            const highScore = await HighScore2.create(args);
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { game2: highScore._id } },
                { new: true }
            ).populate('game2');
            return highScore;
        }
        throw new AuthenticationError('Not logged in');
    },
    updateHighScore3: async (parent, args, context) => {
        if (context.user) {
            const highScore = await HighScore3.create(args);
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { game3: highScore._id } },
                { new: true }
            ).populate('game3');
            return highScore;
        }
        throw new AuthenticationError('Not logged in');
    },
    updateHighScore4: async (parent, args, context) => {
        if (context.user) {
            const highScore = await HighScore4.create(args);
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { game4: highScore._id } },
                { new: true }
            ).populate('game4');
            return highScore;
        }
        throw new AuthenticationError('Not logged in');
    },
    deleteUser: async (parent, args, context) => {
        if (context.user) {
            const deletedUser = await User.findOneAndDelete({ _id: context.user._id });
            return deletedUser;
        }
        throw new AuthenticationError('Not logged in');
    },
    },
};

module.exports = resolvers;