import  { actionType } from "./ActionType";

const {
    LOGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTER_USER,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    PASSWORD_RESET,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_ERROR,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,
    LOGOUT_USER
} = actionType;


const initialState = {
    isLogged:false,
    isRegister:false,
    isReset: false,
    userData: {},
    userDataInput: {},
    isError:false,
    loading:false,
    roles: '',
}


export const LoginReducer = (state= initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_USER: 
            return {
                 ...state,
                 userDataInput: payload, 
                 loading: true,
                 isLogged: false, 
                };
        case LOGIN_SUCCESS:
            return { 
                ...state,
                userDataInput: {},
                userData: payload, 
                isLogged: true, 
                loading:false,  
                loginError: {}
            };
        case LOGIN_ERROR : 
            return { 
                ...state,
                isLogged:false, 
                loading: false, 
                loginError: payload, 
                key: null 
            };


        case CHANGE_PASSWORD:
            return { ...state, loading: true, change:false}

        case CHANGE_PASSWORD_ERROR:
            return { ...state, loading: false, change:false}

        case CHANGE_PASSWORD_SUCCESS:
            return { ...state, loading: false, change:true}

        case LOGOUT_USER:
                return {
                  ...state,
                  isLogged: false,
                  userData: {},
                  userDataInput: {},
                  isError: false,
                  recovered: false,
                  loading: false,
                };
        default: 
            return state
    }
    
}


export const RegisterReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case REGISTER_USER: 
            return {
                ...state,
                userDataInput: payload, 
                loading: true,
                isLogged: false, 
            }
            case REGISTER_SUCCESS: 
            return {
                ...state,
                userDataInput: payload, 
                isLogged: false, 
                isRegister: true,
                loading:false,  
                registerError: {}
            }
            case REGISTER_ERROR: 
            return {
                ...state, 
                loading: false,
                isLogged: false, 
                registerError: payload,
            }
            default: 
                return state
    }
}


export const ResetPasswordReducer = ( state = initialState, { type, payload}) => {
    switch (type) {

        case PASSWORD_RESET:
            return {
                ...state,
                loading: true,
                userDataInput: payload,
                isLogged: false,
            }
        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                loading: false,
                // userData: payload,
                userDataInput: { },
                isReset: true
            }
        case PASSWORD_RESET_ERROR:
            return {
                ...state,
                loading:false,
                isLogged: false
            }
        default: 
            return state
    }
}