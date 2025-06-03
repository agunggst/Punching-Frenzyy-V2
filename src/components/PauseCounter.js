import React, { useRef, useEffect } from 'react';
import './style/Ready.css';
import { useSelector, useDispatch } from 'react-redux';
import { pauseGame, startPauseCounter } from '../store/actions/keypoints';

const PauseCounter = () => {
  const dispatch = useDispatch();
  const readyToPause = useSelector((state) => state.keypoint.readyToPause);
  const gamePaused = useSelector((state) => state.keypoint.gamePaused);
  const [countdown, setCountdown] = React.useState(4);
  let timerId = useRef();

  const getCountdown = () => {
    setCountdown((countdown) => {
      return countdown - 1;
    });
  };

  React.useEffect(() => {
    if (readyToPause && !gamePaused) {
      timerId.current = setInterval(() => {
        getCountdown();
      }, 1000);
    }
  }, [readyToPause, gamePaused]);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current);
      setCountdown(4);
      dispatch(startPauseCounter(false));
      dispatch(pauseGame());
    }
  }, [countdown, dispatch]);

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, [])

  if (readyToPause && !gamePaused) {
    if (countdown === 4) {
      return (
        <>
        <div className="countdown">
          <h1>PAUSE IN </h1>
          </div>
        </>
      );
    } else if (countdown === 0) {
      return null;
    } else {
      return ( 
      <>
      <div className="countdown">
          <h1>{countdown}</h1>
          </div>
      </>
      )
    }
  } else {
    return null;
  }
};

export default PauseCounter;
