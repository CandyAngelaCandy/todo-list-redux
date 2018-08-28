import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';

class TodoDetailer extends PureComponent {
  constructor() {
    super();
    this.state = {
      todoList: []
  }}

  componentDidMount() {
    const id = this.props.location.pathname.substring(8);
    fetch(`/api/todos/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then(response => {
        return response.json();
      })
      .then(todoList => {
        this.setState({
          todoList: todoList,
        });
      });
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
    return Y + M + D + h + m + s;
  };

  render() {
    let todoList = this.state.todoList;
    return (
      <div className="col-md-6 offset-md-3 mt-2">
        <h1>detail todo</h1>
        <button
          className="btn btn-link"
          onClick={() => {
            browserHistory.push('/');
          }}
        >
          back to todos
        </button>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">事情</th>
              <th className="text-center">创建时间</th>
              <th className="text-center">完成情况</th>
              <th className="text-center">任务分解</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{todoList.id}</td>
              <td className="text-center">{todoList.text}</td>
              <td className="text-center">
                {this.formatDate(todoList.time)}
              </td>
              <td className="text-center">
                {todoList.completed ? 'yes' : 'no'}
              </td>
              <td className="text-center">
                {todoList.taskItems != null
                  ? todoList.taskItems.map(taskItem => {
                      return (
                        <div style={{ marginLeft: '10px' }}>
                          {taskItem.text}
                        </div>
                      );
                    })
                  : 'loading'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoDetailer;
