import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer } from '../reducer/Reducer'

export const rootReducer = combineReducers ({
    LoginReducer,
    RegisterReducer
})