import { connect } from 'react-redux';
import TodoDetailer from '../components/TodoDetailer';
import {
    selectTodoByItem
} from '../actions/index';

const mapStateToProps = state => {
  console.log('===', state.todoList);
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = {
    selectTodoByItem
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoDetailer);
