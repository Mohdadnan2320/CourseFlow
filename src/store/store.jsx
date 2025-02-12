import { configureStore } from '@reduxjs/toolkit';
import CoursesReducer from './reducers/CourseReducer';

export const store = configureStore({
    reducer:{
        CoursesReducer: CoursesReducer
    },
})