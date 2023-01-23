import { configureStore } from '@reduxjs/toolkit';
import theme from './themeSlice';
import input from './inputSlice';
import settings from './settingsSlice';
import page from './pageSlice';
import update from './updateSlice';

export const store = configureStore({
    reducer: {
        theme,
        input,
        settings,
        page,
        update,
    },
});
