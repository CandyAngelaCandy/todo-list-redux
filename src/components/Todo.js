import React, { PureComponent } from 'react';

class Todo extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <h1>todos</h1>
          <input
            type="text"
            ref={el => {
              this.filterInput = el;
            }}
            onBlur={() => {
              this.props.filterTodo(this.filterInput.value);
            }}
          />
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
                  <span
                    contentEditable={todoItem.editable}
                    onDoubleClick={() => {
                      this.props.editTodo(todoItem);
                    }}
                    onBlur={
                        () => {
                            this.props.updateTodo(todoItem,this.todoContent.innerText);
                        }
                    }
                    ref={el => {
                        this.todoContent = el;
                    }}
                  >
                    {todoItem.text}
                  </span>
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
