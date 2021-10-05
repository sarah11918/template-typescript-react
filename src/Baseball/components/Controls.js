import React from 'react';

export default function Controls({executeStrike, executeBall, executeFoul, executeHit}){
    return(
        <div>
            <button onClick={executeStrike}>strike</button>
            <button onClick={executeBall}>ball</button>
            <button onClick={executeFoul}>foul</button>
            <button onClick={executeHit}>hit</button>
        </div>
    )
}
