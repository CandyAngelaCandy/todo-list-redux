const todoState = [
  {
    text: 'Use Redux',
    completed: false,
    id: -1
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
       })

       return filterState;
       break;

    default:
      return state;
  }
}
