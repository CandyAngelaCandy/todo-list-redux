import { connect } from 'react-redux';
import TodoDetailer from '../components/TodoDetailer';
import { selectTodoByItem, getTodoById } from '../actions/index';

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = {
  selectTodoByItem,
  getTodoById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailer);
