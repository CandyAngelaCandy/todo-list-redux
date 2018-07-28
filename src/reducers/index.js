import { combineReducers } from 'redux';
import todoInfo from './todo';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  todoList: todoInfo,
  userInfo
});

export default rootReducer;
