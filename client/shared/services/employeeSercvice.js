import axios from "axios";
import { fetchEmployees } from "../redux/reducers/employeeSlice";

const BASE_URL = 'http://localhost:8000/api';


export const fetchAllEmployees = async (dispatch) => {
    try {
        const res = await axios.get(`${BASE_URL}/employee`);
        dispatch(fetchEmployees(res.data));
    
        return data;

    } catch (error) {
        console.log(error)
    }
}

export const createEmployee = async (dispatch, data) => {
    const res = await axios.post(`${BASE_URL}/employee`, data);

    console.log(">>>>> user Created ", res);
}

export const getEmployee = async (dispatch, id) => {
    const res = await axios.get(`${BASE_URL}/employee/${id}`);
    console.log('get employee', res.data)
    return res.data
}

export const updateEmployee = async (dispatch, data) => {
    const res = await axios.put(`${BASE_URL}/employee/${data.id}`, data);
    console.log('update employee', res.data)
    return res.data
}