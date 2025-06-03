import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { collideCircle, createHandKeypoint, findCoord } from "../helpers";

import Sketch from "react-p5";
import FruitLeft from "../objects/fruitLeft";
import FruitRight from "../objects/fruitRight";
import BombLeft from "../objects/bomLeft";
import BombRight from "../objects/bombRight";

import GameOver from "../components/GameOver.js";
import FloatingScores from "../components/FloatingScores";
import PauseCounter from "../components/PauseCounter";
import PauseAndResume from '../components/PauseAndResume';

import {
  gameStart,
  startPauseCounter,
  startResumeCounter,
} from "../store/actions/keypoints";
import { showFloatingScore } from "../store/actions/floatingScores";
import { useParams } from "react-router-dom";
const gameOverSound = new Audio('/assets/audio/gameOver.mp3');

const music = new Audio("/assets/audio/GameBg.mp3");
const squish = new Audio("/assets/audio/squish.mp3");
const explosion = new Audio("/assets/audio/explosion.mp3");
let fruitImageActive = [];
let fruitImageExplode = [];
let bombImageActive;
let bombImageExplode;
let pauseButton;
let playButton;

const Game = ({ width, height, stopVideo }) => {
  const dispatch = useDispatch();
  const { difficulty } = useParams();
  const [fruits, setFruits] = useState([]);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timerPaused, setTimerPaused] = useState(0);
  let timerId = useRef();
  const [bombs, setBombs] = useState([]);
  const [lBoundary, setLBoundary] = useState(0);
  const [rBoundary, setRBoundary] = useState(0);
  const [gameMode] = useState(difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 2);
  const [gameConfig] = useState([
    {
      fruitTriggerConstant: 0.98,
      bombTriggerConstant: 0.995,
      vyRandomFactor: 15,
      gravity: 0.15,
    },
    {
      fruitTriggerConstant: 0.97,
      bombTriggerConstant: 0.99,
      vyRandomFactor: 20,
      gravity: 0.3,
    },
    {
      fruitTriggerConstant: 0.96,
      bombTriggerConstant: 0.99,
      vyRandomFactor: 24,
      gravity: 0.4,
    },
  ]);

  const calibrated = useSelector((state) => state.keypoint.calibrated);
  const keypoints = useSelector((state) => state.keypoint.keypoints);
  const isGameStarted = useSelector((state) => state.keypoint.isGameStarted);
  const fruitImages = useSelector((state) => state.item.fruits);
  const gamePaused = useSelector((state) => state.keypoint.gamePaused);

  const getScore = () => {
    return score;
  };

  useEffect(() => {
    music.addEventListener("ended", function () {
      music.play();
    });
    music.volume = 0.2;
    music.play();
  }, []);

  const countDown = () => {
    setTime((time) => time - 1);
  };

  const startTimer = useCallback(() => {
    setIsTimerOn(true);
    timerId.current = setInterval(() => countDown(), 1000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
      music.pause();
      music.currentTime = 0;
    }
  }, []);

  const start = useCallback(() => {
    if (!isTimerOn && !gameOver && isGameStarted && !gamePaused) {
      startTimer();
    }

    if (isGameStarted && !gameOver) {
      const lShoulder = findCoord("leftShoulder", keypoints);
      const rShoulder = findCoord("rightShoulder", keypoints);
      setLBoundary(lShoulder.x - 140);
      setRBoundary(rShoulder.x + 140);
      const { letfHandKeypoints, rightHandKeypoints } = createHandKeypoint(
        keypoints
      );

      if (gamePaused) {
        if (
          collideCircle(
            letfHandKeypoints.x,
            letfHandKeypoints.y,
            100,
            720,
            50,
            50
          )
        ) {
          dispatch(startResumeCounter(true));
          setTime(timerPaused);
          music.play();
        } else if (
          collideCircle(
            rightHandKeypoints.x,
            rightHandKeypoints.y,
            100,
            720,
            50,
            50
          )
        ) {
          dispatch(startResumeCounter(true));
          setTime(timerPaused);
          music.play();
        }
      }

      if (letfHandKeypoints && !gamePaused) {
        if (
          collideCircle(
            letfHandKeypoints.x,
            letfHandKeypoints.y,
            100,
            720,
            50,
            50
          )
        ) {
          dispatch(startPauseCounter(true));
          setTimeout(() => {
            clearInterval(timerId.current);
            timerId.current = null;
            setTimerPaused(time);
            setIsTimerOn(false);
            music.pause();
          }, 4000)
        }

        for (let fruit of fruits) {
          if (
            collideCircle(
              letfHandKeypoints.x,
              letfHandKeypoints.y,
              95,
              fruit.x,
              fruit.y,
              fruit.diameter
            ) &&
            fruit.isShown
          ) {
            if (!fruit.isDestroyed) {
              dispatch(showFloatingScore(`+100`, fruit.x, fruit.y));
              setScore(score + 100);
              squish.play();
            }
            fruit.destroy();
          }
        }

        for (let bomb of bombs) {
          if (
            collideCircle(
              letfHandKeypoints.x,
              letfHandKeypoints.y,
              75,
              bomb.x,
              bomb.y,
              bomb.diameter
            )
          ) {
            if (!bomb.isDestroyed) {
              dispatch(showFloatingScore(`-100`, bomb.x, bomb.y));
              setScore(score - 100);
              explosion.play();
            }
            bomb.destroy();
          }
        }
      }

      if (rightHandKeypoints && !gamePaused) {
        if (
          collideCircle(
            rightHandKeypoints.x,
            rightHandKeypoints.y,
            100,
            720,
            50,
            50
          )
        ) {
          dispatch(startPauseCounter(true));
          setTimeout(() => {
            clearInterval(timerId.current);
            timerId.current = null;
            setTimerPaused(time);
            setIsTimerOn(false);
            music.pause();
          }, 4000);
        }

        for (let fruit of fruits) {
          if (
            collideCircle(
              rightHandKeypoints.x,
              rightHandKeypoints.y,
              95,
              fruit.x,
              fruit.y,
              fruit.diameter
            ) &&
            fruit.isShown
          ) {
            if (!fruit.isDestroyed) {
              dispatch(showFloatingScore(`+100`, fruit.x, fruit.y));
              setScore(score + 100);
              squish.play();
            }
            fruit.destroy();
          }
        }

        for (let bomb of bombs) {
          if (
            collideCircle(
              rightHandKeypoints.x,
              rightHandKeypoints.y,
              75,
              bomb.x,
              bomb.y,
              bomb.diameter
            )
          ) {
            if (!bomb.isDestroyed) {
              dispatch(showFloatingScore(`-100`, bomb.x, bomb.y));
              setScore(score - 100);
              explosion.play();
            }
            bomb.destroy();
          }
        }
      }

      // TODO: handle collide with bomb
    }

    if (time <= 0) {
      music.pause();
      music.currentTime = 0;
      gameOverSound.play();
      setTimeout(() => {
        gameOverSound.pause()
      }, 2000)
      setGameOver(true);
      dispatch(gameStart(false));
      clearInterval(timerId.current);
      setTime(60);
    }
  }, [
    keypoints,
    fruits,
    isTimerOn,
    startTimer,
    isGameStarted,
    gameOver,
    time,
    bombs,
    dispatch,
    score,
    gamePaused,
    timerPaused,
  ]);

  useEffect(() => {
    if (calibrated.keypoints && !isGameStarted && !gameOver && !gamePaused) {
      setTimeout(() => {
        dispatch(gameStart(true));
      }, 4000);
    }

    start();
  }, [calibrated, start, isGameStarted, gameOver, dispatch, gamePaused]);

  // CANVAS P5 PRELOAD
  const preload = (p5) => {
    p5.Fredoka = p5.loadFont("/assets/FredokaOne-Regular.ttf");
    for (let i = 0; i < fruitImages.length; i++) {
      fruitImageActive.push(p5.loadImage(fruitImages[i].activeUrl));
      fruitImageExplode.push(p5.loadImage(fruitImages[i].explodeUrl));
    }

    bombImageActive = p5.loadImage("/assets/bombs/bomb.png");
    bombImageExplode = p5.loadImage("/assets/bombs/bombExplode.png");

    pauseButton = p5.loadImage("/assets/buttons/pause.png");
    playButton = p5.loadImage("/assets/buttons/play.png");
  };

  // CANVAS P5 SETUP
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
  };

  const draw = (p5) => {
    p5.clear();
    if (!gamePaused && !gameOver) {
      if (Math.random() >= gameConfig[gameMode].fruitTriggerConstant) {
        let randIntL = Math.floor(
          Math.random() * (fruitImageActive.length - 1 - 0) + 0
        );
        setFruits([
          ...fruits,
          new FruitLeft(
            p5,
            lBoundary,
            gameConfig[gameMode].gravity,
            gameConfig[gameMode].vyRandomFactor,
            fruitImageActive[randIntL],
            fruitImageExplode[randIntL]
          ),
        ]);
      }
      if (Math.random() >= gameConfig[gameMode].fruitTriggerConstant) {
        let randIntR = Math.floor(
          Math.random() * (fruitImageActive.length - 1 - 0) + 0
        );
        setFruits([
          ...fruits,
          new FruitRight(
            p5,
            rBoundary,
            gameConfig[gameMode].gravity,
            gameConfig[gameMode].vyRandomFactor,
            fruitImageActive[randIntR],
            fruitImageExplode[randIntR]
          ),
        ]);
      }
      if (Math.random() >= gameConfig[gameMode].bombTriggerConstant) {
        setBombs([
          ...bombs,
          new BombLeft(p5, lBoundary, bombImageActive, bombImageExplode),
        ]);
      }
      if (Math.random() >= gameConfig[gameMode].bombTriggerConstant) {
        setBombs([
          ...bombs,
          new BombRight(p5, rBoundary, bombImageActive, bombImageExplode),
        ]);
      }
    }
  
      for (let fruit of fruits) {
        fruit.show();
        if (!gamePaused  && !gameOver) {
          fruit.move();
        }
      }
  
      for (let bomb of bombs) {
        bomb.show();
        if (!gamePaused && !gameOver) {
          bomb.move();
        }
      }
    

    p5.noStroke();

    p5.fill(0, 0, 0);
    p5.textFont(p5.Fredoka);

    p5.textSize(36);
    p5.text(`SCORE: ${score}`, 50, 50);
    p5.text(`Time: ${time}`, p5.width - 200, 50);

    p5.push();
    p5.translate(p5.width / 2, 50);
    p5.imageMode(p5.CENTER);
    // if (!gamePaused && !gameOver){
    //   p5.image(pauseButton, 0, 0, 50, 50);
    // }else{
    //   p5.image(playButton, 0, 0, 50, 50)
    // }
    p5.pop();

    // p5.rect(0, 0, lBoundary, p5.height-5);
    // p5.rect(rBoundary, 0, rBoundary, p5.height-5);
  };

  return (
    <>
      {/* <h1 style={{ textAlign: 'center' }} >Time: {time}</h1> */}
      {calibrated.keypoints && isGameStarted ? (
        <>
          <Sketch preload={preload} setup={setup} draw={draw} />
        </>
      ) : null}
      <FloatingScores />
      {gameOver && <GameOver stopVideo={stopVideo} getScore={getScore} />}
      <PauseCounter />
      <PauseAndResume />
    </>
  );
};

export default Game;
