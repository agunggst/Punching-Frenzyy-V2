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
} from './action-types'

const url = 'https://sleepy-falls-43254.herokuapp.com';

export const updateKeypoints = (keypoints) => ({
  type: UPDATE_KEYPOINTS,
  keypoints
});

export const calibrate = (pose) => ({
  type: CALIBRATE,
  pose,
});

export const gameStart = (bool) => ({
  type: GAMESTART,
  bool,
});

export const startPauseCounter = (bool) => ({
  type: START_PAUSE_COUNTER,
  bool
});

export const startResumeCounter = (bool) => ({
  type: START_RESUME_COUNTER,
  bool
})

export const pauseGame = () => ({
  type: PAUSE_GAME,
  bool: true,
});

export const resumeGame = () => ({
  type: RESUME_GAME,
  bool: false,
});

export const fetchScore = () => async (dispatch) => {
  const response = await fetch(url+'/users', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const dataJson = await response.json();
  dispatch({
    type: FETCH_SCORE,
    payload: dataJson,
  });
}

export const submitScore = (name, score) => async (dispatch) => {
  const data = {
    name,
    score,
  };

  const response = await fetch(url+'/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();

  dispatch({
    type: SUBMIT_SCORE,
    payload: dataJson,
  });
};

export const saveName = (name) => ({
  type: SAVE_NAME,
  name,
});
