import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer, ResetPasswordReducer } from '../reducer/Reducer'

export const rootReducer = combineReducers ({
    LoginReducer,
    RegisterReducer,
    ResetPasswordReducer
})