const todoState = [
  {
    text: '123456',
    time: '2018/7/27 6:56',
    id: -1,
    completed: false,
    editable: false,
    visible: true,
    time: new Date().toUTCString(),
    taskItems:[]
  }
];

export default function todos(state = todoState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { ...action.payload }];
      break;

    case 'TOGGLE_TODO':
      const newState = [...state];
      const todo = newState.find(item => {
        return item.id === action.payload.id;
      });
      todo.completed = !todo.completed;
      return newState;
      break;

    case 'FILTER_TODO':
      const newStateFilter = [...state];
      const filterState = newStateFilter.filter(item => {
        return item.text.includes(action.filterValue);
      });

      return filterState;
      break;

    case 'EDIT_TODO':
      const newStateEdit = [...state];
      const editTodo = newStateEdit.find(item => {
        return item.id === action.payload.id;
      });
      editTodo.editable = !editTodo.editable;
      console.log('innerText', editTodo.text);
      return newStateEdit;
      break;

    case 'UPDATE_TODO':
      const newStateUpdate = [...state];
      const upDateTodo = newStateUpdate.find(item => {
        return item.id === action.payload.id;
      });
      upDateTodo.editable = !upDateTodo.editable;

      upDateTodo.text = action.todoContent;

      return newStateUpdate;
      break;

    case 'SELECT_TODO':
      console.log('select');

      const selectState = [...state];
      const selectItem = selectState.filter(item => {
        return item.id === action.id;
      });
      console.log(selectItem);

      return selectItem;
      break;

    case 'GET_LIST_FROM_SERVER':

      // const todoListFromServer = fetch('http://localhost/api/todo')
      //   .then(data => data.json())
      //   .then(list => {
      //     return list;
      //   });
      // debugger;
      console.log("----",action.myJson);
      return [...action.myJson];

      case 'GOT_TODOS':
          console.log("user todoList ---",action.todoList);
          return [...action.todoList];

    default:
      return state;
  }
}
