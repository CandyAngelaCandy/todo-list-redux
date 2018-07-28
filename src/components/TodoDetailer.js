import React, { Component } from 'react';

class TodoDetailer extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.selectTodoByItem(parseInt(id, 10));
    }

  render() {

    return (
        <div>
        <div>detail todo</div>
            {console.log(this.props.todoList[0])}
        <span>{this.props.todoList[0].text}</span>
        <span>{this.props.todoList[0].time}</span>
      </div>
    );
  }
}


export default TodoDetailer;
