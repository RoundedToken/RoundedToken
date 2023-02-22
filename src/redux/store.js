import { configureStore } from '@reduxjs/toolkit';
import theme from './themeSlice';
import input from './inputSlice';
import settings from './settingsSlice';
import update from './updateSlice';
import auth from './authSlice';
import page from './pageSlice';
import language from './languageSlice';

export const store = configureStore({
    reducer: {
        theme,
        input,
        settings,
        update,
        page,
        auth,
        language,
    },
});
