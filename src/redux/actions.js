import { ADD_TODO, DELETE_TODO, MINUS_ONE, PLUS_NUM, PLUS_ONE, TOOGLE_TODO } from "./actionTypes"

export const increament = () => {
    return {
        type: PLUS_ONE
    }
}

export const decreament = () => {
    return {
        type: MINUS_ONE
    }
}

export const increase = (value) => {
    return {
        type: PLUS_NUM,
        payload: value
    }
}


export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            content: todo,
            complete: false
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const toogleTodo = (id) => {
    return {
        type: TOOGLE_TODO,
        payload: id
    }
}