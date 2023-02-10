import './Counter.css';
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const [max, setMax] = useState(10);

    const add = () => {
        setCount(count + 1);
    }

    const del = () => {
        setCount(count - 1);
    }

    const change = (val) => {
        setCount(count => 0)
        setMax(max => val.target.value);
    }

    return (
        <div className="counter">

            <div className='container'>
                <div className="bar">
                    <div className="inside" style={{ width: ((count / max) * 100) + '%' }}></div>
                </div>
                {count > 0 ? (
                    <p>{Math.round((count / max) * 100)}%</p>
                ) : null}
            </div>
            <div className="buttons">
                <input type='number' placeholder='max' min='0' onChange={change}></input>
                <button className='button' onClick={del} disabled={count <= 0}>-</button>
                <button className='button' onClick={add} disabled={count >= max}>+</button>
            </div>
        </div >
    );
}

export default Counter;