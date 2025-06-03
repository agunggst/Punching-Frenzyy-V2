import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  KeypointReducer,
  ItemReducer,
  FloatingScoresReducer
} from './reducers';

const reducers = combineReducers({
  keypoint: KeypointReducer,
  item: ItemReducer,
  floatingScores: FloatingScoresReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;