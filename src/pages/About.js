import React from 'react'
import {Link} from 'react-router-dom'
const afif = '/assets/photo/Afif.jpg';
const ivan = '/assets/photo/Ivan.jpg';
const agung = '/assets/photo/Agung.jpg';
const rofandi = '/assets/photo/Rofandi.jpg';
const logo = '/assets/fruits/favicon.png';

function About(){
  const hover = new Audio("/assets/audio/hover.mp3");
  const click = new Audio("/assets/audio/click.mp3");

    return(
        <div className="BodyAbout">

            <div className="TitleAbout">
            <h3>About Punching Frenzy</h3>
            </div>
            <div className="LogoImage zoomIn">
            <img src={logo} alt="logo"></img>
            </div>
            <div className="DescriptionText">
            <p>
            Punching Frenzy is an Augmented Reality fitness game. 
            You just need an empty space and a webcam, and the character that you play is yourselves. 
            Use your fist to punch two or more fruits that come in your sight… and watch them explode!
            If a workout sounds boring to you, then Punching Frenzy is the right fit for you!.
            </p>
            </div>
            <div className="TheCreator">
            <h3>The Creator</h3>
            </div>
            <div id="gradient2"></div>
            <div id="card2">
            <img src={agung} alt="profpic"/>
            <div className="cardtext">
            <h2>I Gusti Agung Agastya Tarumawijaya</h2>
            <p>Fullstack Developer / AI Engineer</p>
            <p>I am a Software Engineer who combines software development expertise with data science to build functional and data-driven solutions.</p>
            </div>
            <a href="https://www.linkedin.com/in/agunggst/" target='blank'><span className="left bottom btn btn-info">Linkedin Profile</span></a>
            <a href="https://github.com/agunggst" target='blank'><span className="right bottom btn btn-dark">Github Profile</span></a>
            </div>
            <div className="HomeButton">
                <Link to="/" onClick={() => click.play()} onMouseEnter={() => hover.play()} ><div className="btn btn-danger"><h4>Back To Home</h4></div></Link>
            </div>

            <div className="Footer">
            <h5>@2025 Punching Frenzy All Right Reserved</h5>
            </div>


        </div>
    )
}

export default About