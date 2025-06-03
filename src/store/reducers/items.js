import { KILLED_ITEM, RESPAWN_ITEM } from "../actions/action-types";
import { fruits } from "../../helpers";

const defaultState = {
  fruits: [...fruits],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case KILLED_ITEM:
      return {
        ...state,
        fruits: state.fruits.map((fruit) =>
          fruit.name === action.item.name ? action.item : fruit
        ),
      };
    
    case RESPAWN_ITEM:
      return {
        ...state,
        fruits: [...state.fruits.filter((fruit) => fruit.name !== action.item), action.item]
      }

    default:
      return state;
  }
};

export default reducers;
