import React, { useState } from "react";
import "../page.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveName } from "../store/actions/keypoints";
const strawberry = "/assets/fruits/Strawberry.png";
const grapes = "/assets/fruits/Grape.png";
const banana = "/assets/fruits/Banana.png";
const orange = "./assets/fruits/Orange.png";
const watermelon = "./assets/fruits/WaterMelon.png";
const apple = "./assets/fruits/Apple.png";
const pear = "./assets/fruits/Pear.png";

function Mode() {
  const hover = new Audio("/assets/audio/hover.mp3");
  const click = new Audio("/assets/audio/click.mp3");
  const [input, setInput] = useState("");
  const [selectedDiff, setSelectedDiff] = useState('easy')

  const dispatch = useDispatch();
  const navigate = useHistory()
  const playerName = useSelector((state) => state.keypoint.playerName);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    dispatch(saveName(input))
  };

  return (
    <div className="BodyPages">
      <div className="sectionTop d-flex row">
        <img src={banana} className="fruit2 bounce-2" alt="fruit" />
        <img src={apple} className="fruit3 bounce-3" alt="fruit" />
        <img src={grapes} className="fruit4 bounce-4" alt="fruit" />
        <img src={orange} className="fruit5 bounce-2" alt="fruit" />
        <img src={pear} className="fruit6 bounce-3" alt="fruit" />
        <img src={strawberry} className="fruit7 bounce-4" alt="fruit" />
        <img src={watermelon} className="fruit8 bounce-2" alt="fruit" />
        <img src={banana} className="fruit9 bounce-3" alt="fruit" />
        <img src={apple} className="fruit10 bounce-4" alt="fruit" />
        <img src={grapes} className="fruit11 bounce-2" alt="fruit" />
        <img src={orange} className="fruit12 bounce-3" alt="fruit" />
        <img src={pear} className="fruit13 bounce-4" alt="fruit" />
        <img src={strawberry} className="fruit14 bounce-2" alt="fruit" />
        <img src={watermelon} className="fruit15 bounce-3" alt="fruit" />
        <img src={banana} className="fruit16 bounce-4" alt="fruit" />
      </div>
      <div className="center">
        <div className="bounce">
          <input type="text" maxLength={10} value={input} onChange={handleChange} placeholder='Pick Your User Name' className='text-input'/>
          
          <h4 className="mt-4 mb-4">Choose The Level !</h4>
          <div className="difficulty-button-container">
            <div className={`button-diff ${selectedDiff === 'easy' ? 'btn-active' : ''}`} onMouseEnter={() => hover.play()} onClick={() => setSelectedDiff('easy')}>Easy</div>
            <div className={`button-diff ${selectedDiff === 'medium' ? 'btn-active' : ''}`} onMouseEnter={() => hover.play()} onClick={() => setSelectedDiff('medium')}>Medium</div>
            <div className={`button-diff ${selectedDiff === 'hard' ? 'btn-active' : ''}`} onMouseEnter={() => hover.play()} onClick={() => setSelectedDiff('hard')}>Hard</div>
          </div>
          <div className="play-button-container">
            <h4 className="play-button back" type='submit' onMouseEnter={() => hover.play()} onClick={() => navigate.push('/')}>{`<<`}</h4>
            <button type='submit' style={{all: 'unset'}} disabled={!input} onMouseEnter={() => hover.play()} onClick={() => navigate.push(`/game/${selectedDiff}`)}>
              <h4 className="play-button" style={{backgroundColor: '#55b248'}}>START!</h4>
            </button>
          </div>
        </div>
      </div>
      <div className="sectionTop d-flex row">
        <img src={grapes} className="fruit2 bounce-5" alt="fruit" />
        <img src={banana} className="fruit3 bounce-6" alt="fruit" />
        <img src={orange} className="fruit4 bounce-7" alt="fruit" />
        <img src={apple} className="fruit5 bounce-5" alt="fruit" />
        <img src={watermelon} className="fruit6 bounce-6" alt="fruit" />
        <img src={pear} className="fruit7 bounce-7" alt="fruit" />
        <img src={grapes} className="fruit8 bounce-5" alt="fruit" />
        <img src={banana} className="fruit9 bounce-6" alt="fruit" />
        <img src={orange} className="fruit10 bounce-7" alt="fruit" />
        <img src={apple} className="fruit11 bounce-5" alt="fruit" />
        <img src={watermelon} className="fruit12 bounce-6" alt="fruit" />
        <img src={pear} className="fruit13 bounce-7" alt="fruit" />
        <img src={banana} className="fruit14 bounce-5" alt="fruit" />
        <img src={grapes} className="fruit15 bounce-6" alt="fruit" />
        <img src={strawberry} className="fruit16 bounce-7" alt="fruit" />
      </div>
    </div>
  );
}

export default Mode;
