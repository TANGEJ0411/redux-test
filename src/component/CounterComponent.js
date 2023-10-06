import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament, increase } from '../redux/actions';

function CounterComponent() {

    const valueNum = useSelector(state => state.counter)

    const [plusValue, setPlusValue] = useState(0)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(increase(plusValue))
        console.log('submit')
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>CounterComponent</h1>
            <button onClick={() => {
                dispatch(increament())
                console.log('++')
            }}>plus 1</button>
            <h2>{valueNum}</h2>
            <button onClick={() => {
                dispatch(decreament())
                console.log('--')
            }}>minus 1</button>
            <h3>快速加法</h3>
            <form onSubmit={handleSubmit}>
                <input value={plusValue} onChange={(e) => {
                    setPlusValue(e.target.value)
                }} />
            </form>
        </div>
    )
}

export default CounterComponent