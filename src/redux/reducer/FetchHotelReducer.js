const FETCH_HOTEL_SUCCESS = 'FETCH_HOTEL_SUCCESS'
const FETCH_HOTEL_FAILED = 'FETCH_HOTEL_FAILED'

const initState = {
    data: {},
};

const FetchHotelReducer = (state = initState, action) => {
    console.log(action, 'action hotel')
    switch (action.type) {
        case FETCH_HOTEL_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
            };
        case FETCH_HOTEL_FAILED:
            return {
                ...state,
                data: action.payload.data,
            };
        default:
            return { ...state };
    }
};

export default FetchHotelReducer;