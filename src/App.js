import React, { useState } from 'react';
import './App.css';
//import Counter from './Counter/Counter'
import Scoreboard from './Baseball/Scoreboard';
import Display from './Baseball/components/Display.js';
import Controls from './Baseball/components/Controls';


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState (0);

  const throwStrike = () => {
    if (strikes === 2){
      setStrikes(0);
      setBalls(0);
    } else {
    setStrikes(strikes + 1);
    }
  };

  const throwBall = () => {
    if(balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
    else
    {
    setBalls(balls + 1);
    }
  };

  const throwFoul = () => {
    if (strikes < 2 ){
      setStrikes(strikes + 1)
    }
  };

  const throwHit = () => {
    setStrikes(0);
    setBalls(0);
  };
  return (
    <div className="App">
      <Display strikes={strikes} balls={balls}/>
      <Controls 
        executeStrike={throwStrike}
        executeBall={throwBall}
        executeFoul={throwFoul}
        executeHit={throwHit}
      />
    </div>
  );
}

export default App;