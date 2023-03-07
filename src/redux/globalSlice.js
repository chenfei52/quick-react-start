import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
    hideTopMenu: false
};

export const globalSlice = createSlice({
    name: 'global',
    initialState: INIT_STATE,
    reducers: {
        controlTopMenu: (state, action) => {
            state.hideTopMenu = action.payload;
        }
    }
});

export const { controlTopMenu } = globalSlice.actions;

export default globalSlice.reducer;