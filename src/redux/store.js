import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
// import contactReducer from "./reducer/contactReducer";

const store = createStore(reducer, composeWithDevTools( ))


export default store