import { combineReducers } from 'redux';
import todoInfo from './todo';
import userInfo from './userInfo';
import todoDetailer from './todoDetailer';

const rootReducer = combineReducers({
  todoList: todoInfo,
  userInfo,
    todoDetailer,todoDetailer
});

export default rootReducer;
