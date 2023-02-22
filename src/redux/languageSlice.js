import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lang: localStorage.lang ? localStorage.lang : 'eng',
};

export const languageSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang(state) {
            state.lang = state.lang === 'eng' ? 'rus' : 'eng';
            localStorage.lang = state.lang;
        },
    },
});

export const { setLang } = languageSlice.actions;

export default languageSlice.reducer;
