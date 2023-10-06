import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function TodoList() {
    const todoList = useSelector(state => state.todoList)

    return (
        <>
            <h3>TodoList</h3>
            {todoList.map((todo) => {
                console.log(todo)
                return <Todo key={todo.id} id={todo.id} complete={todo.complete} todo={todo.content} />
            })}
        </>
    )
}

export default TodoList