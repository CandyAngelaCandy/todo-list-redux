import { browserHistory } from 'react-router';

let id = 0;
const uuid = () => {
  return id++;
};

export const addTodo = content => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: content,
      id: uuid(),
      completed: false,
      editable: false,
      visible: true,
      time: new Date().toUTCString(),
      taskItems: []
    }
  };
};

export const addTodos = (content, time) => dispatch => {
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({
      text: content,
      completed: false,
      editable: false,
      visible: true,
      time: time,
      taskItems: []
    })
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      getTodosFromBack(dispatch);
    });
};

export const toogleTodo = todoItem => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoItem
  };
};

export const filterTodo = filterValue => {
  return {
    type: 'FILTER_TODO',
    filterValue
  };
};

export const editTodo = todoItem => {
  return {
    type: 'EDIT_TODO',
    payload: todoItem
  };
};

export const updateTodo = (todoItem, todoContent) => {
  return {
    type: 'UPDATE_TODO',
    payload: todoItem,
    todoContent: todoContent
  };
};

export const selectTodoByItem = id => {
  return {
    type: 'SELECT_TODO',
    id: id
  };
};

export const getList = myJson => {
  return {
    type: 'GET_LIST_FROM_SERVER',
    myJson: myJson
  };
};

export const getTodos = todoList => {
  return {
    type: 'GOT_TODOS',
    todoList
  };
};

export const getTodoListFromServer = () => dispatch => {
  getTodosFromBack(dispatch);
};

export const addTask = (todoItemId, taskContent) => dispatch => {
  fetch(`/api/todos/${todoItemId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({
      text: taskContent
    })
  })
    .then(response => {
      return response.text();
    })
    .then(() => {
      getTodosFromBack(dispatch);
    });
};

export const deleteTodo = todoItemId => dispatch => {
  fetch(`/api/todos/${todoItemId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
    .then(response => {
      return response.text();
    })
    .then(() => {
      getTodosFromBack(dispatch);
    });
};

export const getTodoById = todoItemId => dispatch => {
  fetch(`/api/todos/${todoItemId}`, {
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
      return dispatch({
        type: 'GOT_TODOS',
        todoList
      });
    });
};

export const registerUser = (username, password) => dispatch => {
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      password: password
    })
  })
    .then(response => {
      //console.log("后台的response",response.status);
      return response.status;
    })
    .then(responseStatus => {
      console.log('返回状态码' + responseStatus.toString().substring(0, 1));
      if (responseStatus.toString().substring(0, 1) !== '2') {
        alert(' registration failed , please retry');
      } else {
        alert('registration succeed , please login');
      }
    });
};

export const LoginUser = (username, password) => dispatch => {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      password: password
    })
  })
    .then(response => {
      //debugger;
      if (response.status.toString().substring(0, 1) !== '2') {
        //debugger;
        return 'error';
      }
      return response.text();
    })
    .then(data => {
      if (data === 'error') {
        alert('username or password error, login failed');
      } else {
        //console.log("登录的token：",data);
        alert('login succeed');
        localStorage.setItem('token', data);

        //跳转到todo页面
        browserHistory.push('/');
      }
    });
};

function getTodosFromBack(dispatch) {
  fetch('/api/todos', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
    .then(response => {
      console.log(response);

      return response.json();
    })
    .then(todoList => {
      //debugger;
      console.log('todoList in userId' + todoList);
      return dispatch({
        type: 'GOT_TODOS',
        todoList
      });
    });
}
