import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function TodoComponent() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>TodoComponent</h1>
            <TodoList />
            <AddTodo />
        </div>
    )
}

export default TodoComponent