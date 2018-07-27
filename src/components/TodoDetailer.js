import React, { Component } from 'react';

class TodoDetailer extends Component {

    render() {
        console.log(this.props.todoList);
        return (
            <div>
                {console.log(this.props.todoList)}
                <div>detail todo</div>
                <span>{this.props.todoList[0]["text"]+"    "}</span>
                <span>{this.props.todoList[0]["time"]}</span>
            </div>
        );
    }
}

export default TodoDetailer;