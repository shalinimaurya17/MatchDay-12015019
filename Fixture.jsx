import React from 'react'
import ReactDOM from 'react-dom';
import Page2 from './Page2';

function call(){
    ReactDOM.render(<Page2/>,document.getElementById("root"));
}

function Fixture(props){
    return <button id='Fix' onClick={call}>
        <h2 className='center'>All India Senior Ranking Badminton Tournament</h2>
        <h3 className='center'>{props.MatchType}</h3>
        <div>
            <div className='disIn' > {props.img1}</div>
            <div className='disIn'>
                <p>v/s</p> 
                <p>{props.score}</p>
            </div>
            <div className='disIn' > {props.img2}</div>
        </div>
        <div className='player'>
            <p className='disIn'>{props.player1}</p>
            <img className='disIn' src="img\logo_white.png"></img>
            <p className='disIn'> {props.player2}</p>
        </div>
    </button>
}

export default Fixture; 