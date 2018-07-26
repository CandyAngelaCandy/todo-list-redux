import React, { PureComponent } from 'react';

class Todo extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <h1>todos</h1>
          <input type="text"/>
          <input
            type="text"
            ref={el => {
              this.input = el;
            }}
          />
          <button
            onClick={() => {
              this.props.addTodo(this.input.value);
            }}
          >
            add
          </button>
        </div>
        <ul>
          {this.props.todoList.map(todoItem => {
            return (
              <li key={todoItem.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    this.props.toogleTodo(todoItem);
                  }}
                />{' '}
                {todoItem.completed ? (
                  <del>
                    <span>{todoItem.text}</span>
                  </del>
                ) : (
                  <span>{todoItem.text}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
