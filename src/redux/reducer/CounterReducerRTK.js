import { createSlice } from "@reduxjs/toolkit"


// redux toolkit

const initialState = 0

const CounterSlice = createSlice({
    name: 'counterRTK',
    initialState,
    reducers: {
        increamentRTK(state) {
            return state + 1
        },
        decreamentRTK(state) {
            return state - 1
        },
        increaseRTK(state, action) {
            return state + Number(action.payload)
        }
    }
})

export const { increamentRTK, decreamentRTK, increaseRTK } = CounterSlice.actions
export default CounterSlice.reducer