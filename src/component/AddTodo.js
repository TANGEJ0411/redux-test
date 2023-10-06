import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function AddTodo() {

    const [stringTodo, setStringTodo] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        dispatch(addTodo(stringTodo))
        setStringTodo('')
    }
    return (
        <>
            <div>AddTodo</div>
            <form onSubmit={handleSubmit}>
                <input value={stringTodo} onChange={(e) => { setStringTodo(e.target.value) }} />
            </form>
        </>
    )
}

export default AddTodo