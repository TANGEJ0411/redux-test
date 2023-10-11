import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotel } from '../redux/actions';

function HotelFetch() {

    const valueNum = useSelector(state => state.fetchHotel)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchHotel())
    // }, []);

    return (
        <>
            <button onClick={() => { dispatch(fetchHotel()) }}>fetch</button>
            <div>{JSON.stringify(valueNum)}</div>
        </>
    )
}

export default HotelFetch