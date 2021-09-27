import React, {useState} from 'react';
import "./Counter.css";

function Counter(){
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1);
    return(
        <div>
            <h2 data-testid="header">My Counter</h2>
            <h1 data-testid="counter"
                className={`${count} >=100 ? green : ${count} < 0 ? "red" : ""}`}
            >{count}</h1>

            <button data-testid="subtract-button"
                onClick={()=>setCount(count-step)}>-</button>
            <input 
                style={{width:"25%", textAlign:"center"}}
                type="number" 
                data-testid="input" 
                value= {step} 
                onChange={(element)=>setStep(parseInt(element.target.value))} />
            <button data-testid="add-button"
            
                onClick={()=>setCount(count + step)}>+</button>
            <h3 data-testid="step">{step}</h3>
            
        </div>
    )
}

export default Counter