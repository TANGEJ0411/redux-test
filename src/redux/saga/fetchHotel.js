import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

const FETCH_HOTEL = 'FETCH_HOTEL'

const FETCH_HOTEL_SUCCESS = 'FETCH_HOTEL_SUCCESS'

const FETCH_HOTEL_FAILED = 'FETCH_HOTEL_FAILED'


function* fetchData() {
    try {
        const data = yield call(axios.get('https://raw.githubusercontent.com/TANGEJ0411/fakeDB/main/db.json'))
        yield put({ type: FETCH_HOTEL_SUCCESS, payload: { data } });
    } catch (error) {
        yield put({ type: FETCH_HOTEL_FAILED, payload: { data: error.message } });
    }
}

function* myHotelSaga() {
    yield takeEvery(FETCH_HOTEL, fetchData);
}

export default myHotelSaga;