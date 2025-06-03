import React, { useRef } from "react";
import './style/Ready.css';
import { useSelector } from 'react-redux';

const Ready = () => {
  const calibrated = useSelector((state) => state.keypoint.calibrated);
  const isGameStarted = useSelector((state) => state.keypoint.isGameStarted);
  const [countdown, setCountdown] = React.useState(4);
  let timerId = useRef();

  const getCountdown = () => {
    setCountdown((countdown) => {
      return countdown - 1;
    });
  };

  React.useEffect(() => {
    if (calibrated.keypoints && !isGameStarted) {
      timerId.current = setInterval(() => {
        getCountdown();
      }, 1000);
    }
  }, [calibrated, isGameStarted]);

  if (calibrated.keypoints && !isGameStarted) {
    if (countdown === 4) {
      return (
        <>
        <div className="countdown">
          <h1>READY? </h1>
          </div>
        </>
      );
    } else if (countdown === 0) {
      clearInterval(timerId.current);
      return (
        <>
        <div className="countdown">
          <h1>GO!</h1>
          </div>
        </>
      );
    } else {
      return ( 
      <>
      <div className="countdown">
          <h1>{countdown <= -1 ? "" : countdown}</h1>
          </div>
      </>
      )
    }
  } else {
    return null;
  }

};

export default Ready;