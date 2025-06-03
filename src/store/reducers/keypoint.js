import {
  UPDATE_KEYPOINTS,
  CALIBRATE,
  GAMESTART,
  START_PAUSE_COUNTER,
  PAUSE_GAME,
  RESUME_GAME,
  START_RESUME_COUNTER,
  SUBMIT_SCORE,
  FETCH_SCORE,
  SAVE_NAME,
} from '../actions/action-types';

const defaultState = {
  keypoints: [],
  leaderboards: [],
  calibrated: {},
  playerName: '',
  isGameStarted: false,
  isGameEnded: false,
  readyToPause: false,
  readyToResume: false,
  gamePaused: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_KEYPOINTS:
      return { ...state, keypoints: action.keypoints };

    case CALIBRATE:
      return { ...state, calibrated: action.pose };
    
    case GAMESTART:
      const reverse = !action.bool;
      return {...state, isGameStarted: action.bool, isGameEnded: reverse };

    case START_PAUSE_COUNTER:
      return { ...state, readyToPause: action.bool };
    
    case START_RESUME_COUNTER:
      return { ...state, readyToResume: action.bool };

    case PAUSE_GAME:
      return { ...state, gamePaused: action.bool };
  
    case RESUME_GAME:
      return { ...state, gamePaused: action.bool };
    
    case FETCH_SCORE:
      return { ...state, leaderboards: action.payload };

    case SUBMIT_SCORE:
      return { ...state, leaderboards: [...state.leaderboards, action.payload] };
    
    case SAVE_NAME:
      return { ...state, playerName: action.name };
    default:
      return state;
  }
};

export default reducer;