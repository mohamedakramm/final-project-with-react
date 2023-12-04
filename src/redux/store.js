import counterReducer from "./Reducers/CounterReducers";
import { createStore } from "redux";

const store =createStore(counterReducer)
export default store;