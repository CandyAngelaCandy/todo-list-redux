const todoState = [
    {
        text: "123456",
        time:"2018/7/27 6:56",
        id: -1,
        completed: false,
        editable: false,
        visible: true,
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
      // debugger;
      const newState1 = [...state];

      const filterState = newState1.filter(item => {
        return item.text === action.filterValue;
      });

      return filterState;
      break;

    case 'EDIT_TODO':
      const newState2 = [...state];
      const todo1 = newState2.find(item => {
        return item.id === action.payload.id;
      });
      todo1.editable = !todo1.editable;
      console.log("innerText",todo1.text);
      return newState2;
      break;

      case 'UPDATE_TODO':
          const newState3 = [...state];
          const todo2 = newState3.find(item => {
              return item.id === action.payload.id;
          });
          todo2.editable = !todo2.editable;

          todo2.text = action.todoContent;

          return newState3;
          break;

      case "CHANGE_ROUTER":
          //debugger;
            window.location = '/detail';
          const newState4 = [...state];
          const filterDetailState = newState4.filter(item => {
              return item.id === action.payload.id;
          });
          return filterDetailState;
          break;

    default:
      return state;
  }
}
