import { ADD_FLOATING_SCORE, REMOVE_FLOATING_SCORE } from "../actions/action-types";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FLOATING_SCORE:
            return [
                ...state,
                {
                    timestamp: action.timestamp,
                    text: action.text,
                    x: action.x,
                    y: action.y
                }
            ];
        case REMOVE_FLOATING_SCORE:
            return state.filter(fs => fs.timestamp !== action.timestamp);
        default:
            return state;
    }
}

export default reducer;