import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: localStorage.version === 'v.3.2' ? false : true,
    version: localStorage.version === undefined ? '' : localStorage.version,
};

export const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
        closeUpdate(state) {
            state.status = false;
            localStorage.update = state.status;
            localStorage.version = 'v.3.2';
        },
    },
});

export const { closeUpdate } = updateSlice.actions;

export default updateSlice.reducer;
