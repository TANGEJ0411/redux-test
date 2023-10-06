
// 建立自己的reducer

// 定義inital state value

const value = 0

const CounterRuducer = (state = value, action) => {
    console.log(state, action, 'conunter action')
    switch (action.type) {
        case 'COUNTER/INCREMENT':
            return state + 1

        case 'COUNTER/DECREMENT':
            return state - 1

        case 'COUNTER/INCREASE':
            const newState = state + Number(action.payload)
            return newState
        default:
            return state
    }
}

export default CounterRuducer
