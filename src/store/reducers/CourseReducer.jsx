/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses : [],
};


export const CourseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers:{
        getcourses: (state, action)=> {
            state.courses = action.payload;
        }
    }
})

export default CourseSlice.reducer;

export const { getcourses } = CourseSlice.actions;

