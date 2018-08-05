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
      time: new Date().toUTCString()
    }
  };
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

export const getList = (myJson) => {
  return {
    type: 'GET_LIST_FROM_SERVER',
      myJson:myJson
  };
};

export const getTodos = (todoList) => {
  return {
      type: 'GOT_TODOS',
      todoList
  }
}

export const getTodoListFromServer = () => dispatch =>{
    return fetch('/api/todolist')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(todoList => {
            return dispatch({
                type: 'GOT_TODOS',
                todoList
            });
        });
}

export const registerUser = (username, password) => dispatch => {
    console.log("register");
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
            console.log(response);
            return response.text();
        })
        .then(data => {
            alert("register success");
            console.log("token",data);
            //跳到登录页面
            //browserHistory.push('/login');
        });
};

