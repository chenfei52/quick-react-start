import globalReducer from './globalSlice';
import userReducer from './userSlice';
import { configureStore } from "@reduxjs/toolkit";

export default function initStore(){
    return configureStore({
        reducer: {
            global: globalReducer,
            user: userReducer
        },
        middleware: getDefaultMiddleware=>{
            return getDefaultMiddleware({
                thunk: true
            })
        }
    })
}