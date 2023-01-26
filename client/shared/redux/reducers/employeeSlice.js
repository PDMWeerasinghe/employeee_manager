import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
    fetching: false,
    saving: false,
};

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        fetchEmployees: (state, {payload}) => {
            console.log(">>>> Fetching data", state.list.length, payload)
            state.list = payload;
        },
        addEmployee: (state) => {
            console.log("XXX", state);
            // state.list.push(payload)
        },
        // updateEmployee: (state) => {

        // },
        // deleteEmployee: () => { }
    }
});

export const { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
