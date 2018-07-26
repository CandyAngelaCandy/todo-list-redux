const todoDetailInfoState = {
    text: 'detail'
};

export default function user(state = todoDetailInfoState, action) {
    switch (action.type) {
        // case "CHANGE_ROUTER":
        //     const newState = [...state];
        //     newState["text"]=action.targetVal;
        //     newState["time"]="2018/7/27 5:58";
        //     return newState;
        //     break;
        default:
            return state;
    }
}
