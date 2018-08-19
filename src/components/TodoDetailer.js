import React, { Component } from 'react';

class TodoDetailer extends Component {
  componentDidMount() {
    //debugger;
    const id = this.props.location.pathname.substring(8);
    this.props.selectTodoByItem(parseInt(id, 10));
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3 mt-2">
        <h1>detail todo</h1>
        <table className="table mt-5 App">
          <thead>
            <tr>
              <th>事情</th>
              <th>创建时间</th>
            </tr>
            <tbody>
              <tr>
                <td width="50%">{this.props.todoList[0].text}</td>
                <td width="50%">{this.props.todoList[0].time}</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
    );
  }
}

export default TodoDetailer;
