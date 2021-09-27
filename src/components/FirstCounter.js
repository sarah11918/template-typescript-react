import React, {useState} from 'react';


const Counter = ({start}) => {
    const [count, setCount] = useState(start)
    return (
        <div>
            <div>Count: {count}</div>
            <button 
            onClick={() => setCount(count + 1)}>
            Add</button>
            <button 
            onClick={() => {
                count > 0 ? setCount(count - 1) : setCount(0)  
                }}>
            Subtract</button>
        </div>
    )};

export default Counter;