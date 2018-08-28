import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import { Modal, Button } from 'antd';

class Todo extends PureComponent {
  componentDidMount() {
    this.props.getTodoListFromServer();
  }

  formatDate = time => {
    const date = new Date(time);
    const Y = date.getFullYear() + '-';
    const M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds();
    //console.log(Y+M+D+h+m+s);
    return Y + M + D + h + m + s;
  };

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
                this.props.addTodos(this.input.value, new Date().toUTCString());
              }}
            >
              add todo
            </button>
          </div>
          <div className="row input-group mb-3">
            <input
              type="text"
              ref={el => {
                this.taskInput = el;
              }}
              placeholder="add task"
            />
          </div>
        </div>

        <div className="row input-group mb-3">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">完成</th>
                <th className="text-center">todo内容</th>
                <th className="text-center">创建时间</th>
                <th className="text-center">任务分解</th>
                <th className="text-center">操作</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todoList.map(todoItem => {
                //console.log('task array -----------' + todoItem.taskItems);
                return (
                  <tr key={todoItem.id}>
                    <td className="text-center">{todoItem.id}</td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        onChange={() => {
                          this.props.toogleTodo(todoItem);
                        }}
                      />
                    </td>
                    <td className="text-center">
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
                      )}
                    </td>
                    <td className="text-center">
                      {this.formatDate(todoItem.time)}
                    </td>
                    <td className="text-center">
                      {todoItem.taskItems.map(taskItem => {
                        return (
                          <div style={{ marginLeft: '10px' }}>
                            {taskItem.text}
                          </div>
                        );
                      })}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => {
                          browserHistory.push(`/detail/${todoItem.id}`);
                        }}
                      >
                        detail
                      </button>
                      <button
                        onClick={() => {
                          this.props.deleteTodo(todoItem.id);
                        }}
                        style={{ margin: '0 10px' }}
                      >
                        delete
                      </button>
                      <button
                        onClick={() => {
                          this.props.addTask(todoItem.id, this.taskInput.value);
                        }}
                      >
                        add task
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todo;
