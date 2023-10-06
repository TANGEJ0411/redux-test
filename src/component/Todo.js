import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toogleTodo } from '../redux/actions'

function Todo({ todo, complete, id }) {

    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => { dispatch(toogleTodo(id)) }}>{complete ? '未完成' : '完成'}</button>
            <button onClick={() => { dispatch(deleteTodo(id)) }}>刪除</button>
            <div>{todo}</div>
        </>
    )
}

export default Todo