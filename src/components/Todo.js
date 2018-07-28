import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Todo extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <h1>todos</h1>
          <div className="row input-group mb-3">
            <input
              type="text"
              ref={el => {
                this.filterInput = el;
              }}
              placeholder="filter todo item"
            />
            <button
              className="btn btn-info rounded-0"
              onClick={() => {
                this.props.filterTodo(this.filterInput.value);
              }}
            >
              search
            </button>
          </div>
          <div className="row input-group mb-3">
            <input
              type="text"
              ref={el => {
                this.input = el;
              }}
              placeholder="add todo item"
            />
            <button
              className="btn btn-info rounded-0"
              onClick={() => {
                this.props.addTodo(this.input.value);
              }}
            >
              add
            </button>
          </div>
        </div>
        <div className="mt-5">
          {this.props.todoList.map(todoItem => {
            return (
              <div key={todoItem.id}>
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
                  <Link to={`/detail/${todoItem.id}`}>
                    <span
                      contentEditable={todoItem.editable}
                      onDoubleClick={() => {
                        this.props.editTodo(todoItem);
                      }}
                      onBlur={() => {
                        this.props.updateTodo(
                          todoItem,
                          this.todoContent.innerText
                        );
                      }}
                      ref={el => {
                        this.todoContent = el;
                      }}
                    >
                      {todoItem.text}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Todo;
