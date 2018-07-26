let id = 0;
const uuid = () => {
  return id++;
};

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text,
      id: uuid(),
      completed: false,
      editable: false
    }
  };
};

export const toogleTodo = todoItem => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoItem
  };
};
