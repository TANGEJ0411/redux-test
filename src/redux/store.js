import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./allReducers";
import createSagaMiddleware from 'redux-saga'
import myHotelSaga from "./saga/fetchHotel";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});


sagaMiddleware.run(myHotelSaga)

export default store