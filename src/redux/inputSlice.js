import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    decimalsCount: localStorage.decimalsCount === undefined ? '6' : localStorage.decimalsCount,
    percents: localStorage.percents === undefined ? '0.05' : localStorage.percents,
    decimalsLimit: localStorage.decimalsLimit === undefined ? '1' : localStorage.decimalsLimit,
    float: localStorage.float === undefined ? '' : localStorage.float,
    tableMode: localStorage.tableMode === undefined ? false : localStorage.tableMode === 'true',
    custom: localStorage.custom === undefined ? '' : localStorage.custom,
    limitOptions: localStorage.limitOptions === undefined ? 'in %' : localStorage.limitOptions,
    absoluteLimit: localStorage.absoluteLimit === undefined ? '' : localStorage.absoluteLimit,
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setDecimalsCount(state, action) {
            state.decimalsCount = action.payload;
            localStorage.decimalsCount = action.payload;
        },
        setFloat(state, action) {
            state.float = action.payload;
            localStorage.float = action.payload;
        },
        setPercents(state, action) {
            state.percents = action.payload;
            localStorage.percents = action.payload;
        },
        setDecimalsLimit(state, action) {
            state.decimalsLimit = action.payload;
            localStorage.decimalsLimit = state.decimalsLimit;
        },
        setTableMode(state) {
            state.tableMode = !state.tableMode;
            localStorage.tableMode = state.tableMode;
        },
        setCustom(state, action) {
            state.custom = action.payload;
            localStorage.custom = action.payload;
        },
        setLimitOptions(state, action) {
            state.limitOptions = action.payload;
            localStorage.limitOptions = state.limitOptions;
        },
        setAbsoluteLimit(state, action) {
            state.absoluteLimit = action.payload;
            localStorage.absoluteLimit = state.absoluteLimit;
        },
    },
});

export const {
    setDecimalsCount,
    setFloat,
    setPercents,
    setTableMode,
    setCustom,
    setDecimalsLimit,
    setLimitOptions,
    setAbsoluteLimit,
} = inputSlice.actions;

export default inputSlice.reducer;
