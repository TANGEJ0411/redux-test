// 定義inital value

const todoList = []

const TodoListReducer = (state = todoList, action) => {
    console.log(state, action, 'todo state, action')
    switch (action.type) {
        case 'TODO/ADDTODO':
            return [...state, action.payload]

        case 'TODO/DELETETODO':
            return state.filter((todo) => todo.id !== action.payload)

        case 'TODO/TOOGLETODO':
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })

        default:
            return state
    }
}

export default TodoListReducer