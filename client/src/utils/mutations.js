import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
    `;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                }
                }
                }
                `;

export const UPDATE_USER = gql`
    mutation updateUser($username: String!, $email: String!, $password: String!, $location: String!, $picture: String!) {
        updateUser(username: $username, email: $email, password: $password, location: $location, picture: $picture) {
            _id
            username
            email
            password
            location
            picture
        }
    }
    `;

export const ADD_FRIEND = gql`
    mutation addFriend($friendId: ID!) {
        addFriend(friendId: $friendId) {
            _id
            username
            email
            password
            location
            picture
            friendCount
            friends {
                _id
                username
                }
                }
                    }
                    `;

export const REMOVE_FRIEND = gql`
    mutation removeFriend($friendId: ID!) {
        removeFriend(friendId: $friendId) {
            _id
            username
            email
            password
            location
            picture
            friendCount
            friends {
                _id
                username
                }
                }
                }
                `;

export const UPDATE_HIGHSCORE1 = gql`
    mutation updateHighScore1($score: Int!) {
        updateHighScore1(score: $score) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const UPDATE_HIGHSCORE2 = gql`
    mutation updateHighScore2($score: Int!) {
        updateHighScore2(score: $score) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const UPDATE_HIGHSCORE3 = gql`
    mutation updateHighScore3($score: Int!) {
        updateHighScore3(score: $score) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

export const UPDATE_HIGHSCORE4 = gql`
    mutation updateHighScore4($score: Int!) {
        updateHighScore4(score: $score) {
            _id
            user_id
            game_id
            score
            }
            }
            `;

