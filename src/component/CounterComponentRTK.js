import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreamentRTK, increamentRTK, increaseRTK } from '../redux/reducer/CounterRuducerRTK';


function CounterComponentRTK() {

    const valueNum = useSelector(state => state.counterRTK)

    const [plusValue, setPlusValue] = useState(0)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(increaseRTK(plusValue))
        console.log('submit')
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>CounterComponentRTK</h1>
            <button onClick={() => {
                dispatch(increamentRTK())
                console.log('++')
            }}>plus 1</button>
            <h2>{valueNum}</h2>
            <button onClick={() => {
                dispatch(decreamentRTK())
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

export default CounterComponentRTK