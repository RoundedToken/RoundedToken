import { configureStore } from '@reduxjs/toolkit';
import theme from './themeSlice';
import input from './inputSlice';

export const store = configureStore({
    reducer: {
        theme,
        input,
    },
});
