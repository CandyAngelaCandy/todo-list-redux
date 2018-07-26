import React, { Component } from 'react';

class Todo extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>todos</h1>
                    <input type="text" ref={(el) => {
                        this.input = el;
                    }} />
                    <button onClick={() => {
                        this.props.addTodo(this.input.value)
                    }}>add</button>
                </div>
                <ul>
                    {
                        this.props.todoList.map((todoItem) => {
                            return <li key={todoItem.id}>{todoItem.text}</li>
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Todo;
