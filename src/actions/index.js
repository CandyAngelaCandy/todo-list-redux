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
      editable: false,
      visible:true
    }
  };
};

export const toogleTodo = todoItem => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoItem
  };
};

export const filterTodo = (filterValue) => {
    return {
        type:'FILTER_TODO',
        filterValue
    }
}
