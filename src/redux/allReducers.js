import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./reducer/CounterReducer";
import TodoListReducer from "./reducer/TodoListReducer";
import CounterReducerRTK from "./reducer/CounterReducerRTK"
import FetchHotelReducer from "./reducer/FetchHotelReducer";

const allReducers = combineReducers({
    counter: CounterReducer,
    todoList: TodoListReducer,
    counterRTK: CounterReducerRTK,
    fetchHotel: FetchHotelReducer,
})


export default allReducers