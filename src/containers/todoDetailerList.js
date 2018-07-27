import { connect } from 'react-redux';
import TodoDetailer from '../components/TodoDetailer';

const mapStateToProps = state => {
    //console.log('===', state.todoList);
    return {
        todoList: state.todoList
    };
};


export default connect(mapStateToProps)(TodoDetailer);
