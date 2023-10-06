import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./allReducers";


const store = configureStore({ reducer: allReducers });

export default store