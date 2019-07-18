import { combineReducers } from 'redux'
import customers from "./customerReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
    customers: customers,
    users: users
})

export default rootReducer