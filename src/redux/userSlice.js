import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
    userInfo: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INIT_STATE,
    reducers: {
        setUserinfo: (state, action)=>{
            console.log(action);
            state.userInfo = action.payload;
        }
    }
})

export const { setUserinfo } = userSlice.actions;

export default userSlice.reducer;