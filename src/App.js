import React from 'react'
// import ReactShow from './component/ReactShow';
import { Provider } from 'react-redux';
import store from './redux/store'
import CounterComponent from './component/CounterComponent';
import TodoComponent from './component/TodoComponent';
import CounterComponentRTK from './component/CounterComponentRTK';
import HotelFetch from './component/HotelFetch';

function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
      <TodoComponent />
      {/* <ReactShow /> */}
      <CounterComponentRTK />
      <HotelFetch />
    </Provider>
  );
}

export default App;
