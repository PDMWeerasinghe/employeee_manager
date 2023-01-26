import { createSlice } from "@reduxjs/toolkit";


const initialState = { value: 'list'};

export const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        toggleViewMode: (state) => {
            state.value == 'list' ?
                state.value = 'grid' :
                state.value = 'list';
        }
    }
});

export const { toggleViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;
