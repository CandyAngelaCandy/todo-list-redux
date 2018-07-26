import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { addTodo, toogleTodo } from '../actions/index';

const mapStateToProps = state => {
  console.log('===', state.todoList);
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = {
  addTodo,
  toogleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
