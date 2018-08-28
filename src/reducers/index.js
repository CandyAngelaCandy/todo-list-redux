import { combineReducers } from 'redux';
import todoInfo from './todo';
import userInfo from './userInfo';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todoList: todoInfo,
  userInfo,
  routing: routerReducer
});

export default rootReducer;
