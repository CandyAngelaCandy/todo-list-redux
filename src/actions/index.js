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
      visible: true,
      routerUrl:"./"
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

export const editTodo = (todoItem) => {
  return {
    type: 'EDIT_TODO',
    payload: todoItem,
  };
};

export const updateTodo = (todoItem,todoContent) => {
    return {
        type: 'UPDATE_TODO',
        payload: todoItem,
        todoContent:todoContent
    };
};

export const changeRouter = (todoItem) =>{
   return{
     type:'CHANGE_ROUTER',
     payload: todoItem,
     routerUrl:"./about",
   }
}
