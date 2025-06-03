import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchScore } from '../store/actions/keypoints';
import "../page.css";
import { useHistory,Link } from "react-router-dom";
const strawberry = "/assets/fruits/Strawberry.png";
const grapes = "/assets/fruits/Grape.png";
const banana = "/assets/fruits/Banana.png";
const orange = "./assets/fruits/Orange.png";
const watermelon = "./assets/fruits/WaterMelon.png";
const apple = "./assets/fruits/Apple.png";
const pear = "./assets/fruits/Pear.png";

const hover = new Audio("/assets/audio/hover.mp3");
const click = new Audio("/assets/audio/click.mp3");

function LeaderBoard() {
  const history = useHistory();
  const leaderboard = useSelector((state) => state.keypoint.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchScore());
  }, [dispatch]);

  if (!leaderboard) {
    return(
      <div style={{ textAlign: 'center', margin: '0 auto' }}>
        <img src="/assets/loading.gif" alt="" />
      </div>
    )
  }

  return (
    <div className="Body">
      {/* <img src={strawberry} className="strawberry rotate" alt="fruit" /> */}
      <img src={grapes} className="grapes rotatereverse" alt="fruit" />
      <img src={banana} className="banana rotate" alt="fruit" />
      <img src={orange} className="orange rotatereverse" alt="fruit" />
      <img src={strawberry} className="strawberry rotate" alt="fruit" />
      <div className="center">
        <div className="animatetable">
          <h3>LeaderBoard</h3>
          {/* <img src="/assets/HomeLogo.png" height='300px' width='auto' alt="" /> */}
                <table className="table table-borderless table-dark mt-5 mb-5">
                    <thead>
                        <tr>
                        <th className="thead" scope="col">No</th>
                        <th className="thead" scope="col">Username</th>
                        <th className="thead" scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        leaderboard.map((x, index)=>{
                            return (
                                <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="tdetail">{x.name}</td>
                                <td className="tdetail">{x.score}</td>
                                </tr>
                            )
                        })
                      }
                    </tbody>
                </table> 
                <div className="button d-flex row ml-3">
                <Link to="/" onMouseEnter={() => hover.play()} onClick={() => click.play()}><div className="btn btn-danger mr-5 ml-5"><h4>Back Home</h4></div></Link>
                <Link to="/mode" onMouseEnter={() => hover.play()} onClick={() => click.play()} ><div className="btn btn-danger"><h4>Play</h4></div></Link>
                </div>
        </div>
      </div>
      <img src={watermelon} className="watermelon rotate" alt="fruit" />
      <img src={orange} className="strawberry2 rotatereverse" alt="fruit" />
      <img src={apple} className="apple rotatereverse" alt="fruit" />
      <img src={pear} className="pear rotate" alt="fruit" />
    </div>
  );
}

export default LeaderBoard;
