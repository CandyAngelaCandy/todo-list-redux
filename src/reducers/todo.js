const todoState = [{
        text: 'Use Redux',
        completed: false,
        id: -1
    }];

export default function todos(state = todoState, action) {
    switch (action.type) {
        case "ADD_TODO":
            //console.log(123);
            return [...state,
                { ...action.payload }
            ];

        default:
            return state
    }
}