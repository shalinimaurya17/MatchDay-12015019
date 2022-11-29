// eslint-disable-next-line
import React from 'react';
import Search from './Search';
import Fixture from './Fixture';
import data from "./data"

const imageWithCrown = (
  <div display="inline">
    <img className='disBl crown' src="img/crown.png"></img>
<img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' className='flag'></img>
  </div>

);


const flagImg =(
  <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' className='flag'></img>
);

function App() {
  return (
    <div>
      <h1 className="center purple">International Matches</h1>
      <Search />
      {data.map((fix)=>{
        return <Fixture 
        MatchType={fix.MatchType}
        img1={imageWithCrown}
        img2={flagImg}
        score = {fix.Score}
        player1= {fix.Player1}
        player2= {fix.Player2}
        />
      })}
      
    </div>
  );
}

export default App;