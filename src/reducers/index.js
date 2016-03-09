import { combineReducers } from 'redux';
import quiz from './quiz';
import gameinfo from './gameinfo';

const quizApp = combineReducers({
    quiz,
    gameinfo
});

export default quizApp;
