import { connect } from 'react-redux';
import Todo from '../components/Todo';
import {
  addTodo,
  toogleTodo,
  filterTodo,
  editTodo,
  updateTodo,
  getList
} from '../actions/index';

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = {
  addTodo,
  toogleTodo,
  filterTodo,
  editTodo,
  updateTodo,
  getList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
