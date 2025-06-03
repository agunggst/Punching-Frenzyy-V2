import React from 'react';
import './style/HowToPlay.css'

const HowToPlay = ({ close }) => {
  const hover = new Audio("/assets/audio/hover.mp3");
  const click = new Audio("/assets/audio/click.mp3");
    return <>
        <div className="howtoplay">
            <div className="textcontainer">
            <h3>HOW TO PLAY</h3>
            <br></br>
            <h4 className="htp">1. Press Play Now button</h4>
            <h4 className="htp">2. Input your username and choose difficulty level</h4>
            <h4 className="htp">3. Press allow when asked for camera access</h4>
            <h4 className="htp">4. Step back to calibrate your body</h4>
            <h4 className="htp">5. Press pause icon if you want to pause</h4>
            <h4 className="htp">6. Hit fruits with your arm! (+100 score each)</h4>
            <h4 className="htp">7. Be careful not to hit bomb! (-100 score each)</h4>
            <h4 className="htp">8. Press Replay to play again</h4>
            <h4 className="htp">9. Press Submit to save score to leaderboard (Coming Soon)</h4>
            <button type="button" className="btn btn-danger" onMouseEnter={() => hover.play()} onClick={() => {
              click.play();
              close();
            }}><h4>Back</h4></button>
            </div>
        </div>
    </>
}
export default HowToPlay;
