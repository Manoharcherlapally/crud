import { combineReducers } from "redux";
import contactReducer from "./contactReducer";


const reducer = combineReducers({
    contactReducer:contactReducer
})

export default reducer