import React, { Component } from 'react';

class TodoDetailer extends Component {

    render() {
        return (
            <div>
                <span>{this.props.todoDetailer["text"]}</span>
            </div>
        );
    }
}

export default TodoDetailer;