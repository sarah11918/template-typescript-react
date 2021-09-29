import React from 'react';

export default function Display(props){
    return(
        <>
        <div>
            <p>Strikes: {props.strikes}</p>
        </div>
        <div>
            <p>Balls: {props.balls}</p>
        </div>
        </>
    )
}