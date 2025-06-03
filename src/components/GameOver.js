import React, { useState, useEffect } from "react";
import "./style/GameOver.css"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gameStart, submitScore } from "../store/actions/keypoints";
// const gameOverIcon = "/assets/game_over.png";
const gameOverIcon2 = '/assets/game_over2.png';

function GameOver (props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const playerName = useSelector((state) => state.keypoint.playerName);

  const submit = () => {
    props.stopVideo();
    const score = props.getScore();
    dispatch(submitScore(playerName, score));
    history.push('/leaderboard');
  }

  const home = (replay) => {
    props.stopVideo();

    dispatch(gameStart(false));
    if (!replay) {
      history.push('/');
    } else {
      history.push('/mode');
    }
  };

  return (
      <div className="gameOver center">
          <img src={gameOverIcon2} alt="Game Over" className="gameOver-logo" />
          <div className="button-container">
              {/* <button className="gameOverButton btn btn-warning" onClick={() => submit()} ><h4>Submit</h4></button> */}
              <button className="gameOverButton btn btn-warning" onClick={() => home(false)} ><h4>Home</h4></button>
              <button className="gameOverButton btn btn-warning" onClick={() => home(true)} ><h4>Replay</h4></button>
          </div>
      </div>
  )
}

export default GameOver;