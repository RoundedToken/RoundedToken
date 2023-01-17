import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    decimals: localStorage.decimals === undefined ? '6' : localStorage.decimals,
    percents: localStorage.percents === undefined ? '0.05' : localStorage.percents,
    float: localStorage.float === undefined ? '' : localStorage.float,
    mode: localStorage.mode === undefined ? false : localStorage.mode === 'true',
    custom: localStorage.custom === undefined ? '' : localStorage.custom,
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setDecimals(state, action) {
            state.decimals = action.payload;
            localStorage.decimals = action.payload;
        },
        setFloat(state, action) {
            state.float = action.payload;
            localStorage.float = action.payload;
        },
        setPercents(state, action) {
            state.percents = action.payload;
            localStorage.percents = action.payload;
        },
        setMode(state) {
            state.mode = !state.mode;
            localStorage.mode = state.mode;
        },
        setCustom(state, action) {
            state.custom = action.payload;
            localStorage.custom = action.payload;
        },
    },
});

export const { setDecimals, setFloat, setPercents, setMode, setCustom } = inputSlice.actions;

export default inputSlice.reducer;
