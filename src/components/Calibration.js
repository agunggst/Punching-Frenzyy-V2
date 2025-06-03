import React from 'react';
import { useSelector } from 'react-redux';

const Calibration = () => {
  const calibrated = useSelector((state) => state.keypoint.calibrated);

  return(
    <>
    {!calibrated.keypoints && <h1 style={styles.header}>GET INTO THE FRAME</h1>}
    </>
  )
};

const styles = {
  header: {
    textAlign: 'center',
    color: 'red',
  },
};

export default Calibration;