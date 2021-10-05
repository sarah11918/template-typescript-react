import React from 'react';
import Display from './components/Display';
import Controls from './components/Controls';


function Scoreboard(){
    return(
        <>
        <Display strikes={2} balls={1}/>
        <Controls />
        </>
    )
}

export default Scoreboard