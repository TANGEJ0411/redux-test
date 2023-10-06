import { combineReducers } from "@reduxjs/toolkit";
import CounterRuducer from "./reducer/CounterRuducer";
import TodoListReducer from "./reducer/TodoListReducer";
import CounterRuducerRTK from "./reducer/CounterRuducerRTK"

const allReducers = combineReducers({
    counter: CounterRuducer,
    todoList: TodoListReducer,
    counterRTK: CounterRuducerRTK
})


export default allReducers