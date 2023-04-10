import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
    query allUsers {
        allUsers {
            _id
            username
            email
            password
            location
            picture
            game1 {
                _id
                user_id
                game_id
                score
            }
            game2 {
                _id
                user_id
                game_id
                score
            }
            game3 {
                _id
                user_id
                game_id
                score
            }
            game4 {
                _id
                user_id
                game_id
                score
            }
            friends {
                _id
                username
                email
                password
                location
                picture
                game1 {
                    _id
                    user_id
                    game_id
                    score
                }
                game2 {
                    _id
                    user_id
                    game_id
                    score
            }
            game3 {
                _id
                user_id
                game_id
                score
        }
        game4 {
            _id
            user_id
            game_id
            score
        }
    }
    friendCount
    }
    }
`;

export const QUERY_USER = gql`
    query user($id: ID!) {
        user(_id: $id) {
            _id
            username
            email
            password
            location
            picture
            game1 {
                _id
                user_id
                game_id
                score
            }
            game2 {
                _id
                user_id
                game_id
                score
            }
            game3 {
                _id
                user_id
                game_id
                score
            }
            game4 {
                _id
                user_id
                game_id
                score
            }
            friends {
                _id
                username
                email
                password
                location
                picture
                game1 {
                    _id
                    user_id
                    game_id
                    score
                }
                game2 {
                    _id
                    user_id
                    game_id
                    score
            }
            game3 {
                _id
                user_id
                game_id
                score
        }
        game4 {
            _id
            user_id
            game_id
            score
        }
    }
    friendCount
    }
    }
`;

export const QUERY_ALL_GAMES = gql`
    query allGames {
        allGames {
            _id
            name
            description
            image
            }
            }
            `;

export const QUERY_GAME = gql`
    query game($id: ID!) {
        game(_id: $id) {
            _id
            name
            description
            image
            }
            }
            `;

export const QUERY_ALL_HIGHSCORES1 = gql`
    query allHighScores1 {
        allHighScores1 {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_ALL_HIGHSCORES2 = gql`
    query allHighScores2 {
        allHighScores2 {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_ALL_HIGHSCORES3 = gql`
    query allHighScores3 {
        allHighScores3 {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_ALL_HIGHSCORES4 = gql`
    query allHighScores4 {
        allHighScores4 {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_HIGHSCORE1 = gql`
    query highScore1($id: ID!) {
        highScore1(_id: $id) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_HIGHSCORE2 = gql`
    query highScore2($id: ID!) {
        highScore2(_id: $id) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_HIGHSCORE3 = gql`
    query highScore3($id: ID!) {
        highScore3(_id: $id) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const QUERY_HIGHSCORE4 = gql`
    query highScore4($id: ID!) {
        highScore4(_id: $id) {
            _id
            user_id
            game_id
            score
            }
            }
            `;
            

    
    