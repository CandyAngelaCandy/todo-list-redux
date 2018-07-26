import { connect } from "react-redux";
import Todo from "../components/Todo";
import {addTodo} from "../actions/index";

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
};

const mapDispatchToProps =  {
    addTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)
