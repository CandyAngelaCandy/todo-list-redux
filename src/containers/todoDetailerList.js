import { connect } from 'react-redux';
import TodoDetailer from '../components/TodoDetailer';

const mapStateToProps = state => {
    const todoDetailer = state.todoDetailer;
    console.log("todoDetailer", todoDetailer);
    return {
        todoDetailer
    };
};


export default connect(mapStateToProps)(TodoDetailer);
