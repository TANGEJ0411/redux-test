import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

const FETCH_HOTEL = 'FETCH_HOTEL'

const FETCH_HOTEL_SUCCESS = 'FETCH_HOTEL_SUCCESS'

const FETCH_HOTEL_FAILED = 'FETCH_HOTEL_FAILED'

// 此為generator function 能夠配合yield在執行過程中暫停
function* fetchData() {
    try {
        // call( function, arg1, arg2... )第一個傳入要執行的function，後面傳入該function要使用的參數
        const data = yield call(axios.get('https://raw.githubusercontent.com/TANGEJ0411/fakeDB/main/db.json'))
        // put 相當於dispatch概念可以用來觸發store 執行reducer
        yield put({ type: FETCH_HOTEL_SUCCESS, payload: { data } });
    } catch (error) {
        yield put({ type: FETCH_HOTEL_FAILED, payload: { data: error.message } });
    }
}

function* myHotelSaga() {
    yield takeEvery(FETCH_HOTEL, fetchData);
}

export default myHotelSaga;