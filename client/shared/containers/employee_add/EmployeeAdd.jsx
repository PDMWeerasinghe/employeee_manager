import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '@/shared/redux/reducers/employeeSlice';
import { EmployeeForm } from "@/shared/containers";
import { createEmployee } from '@/shared/services';


const EmployeeAdd = () => {

    const processing = useSelector(state => (state.employees.saving));
    const dispatch = useDispatch();

    const handleSubmit = (data) => {
        createEmployee(dispatch, data);
    }
    
    return (<EmployeeForm  inProgress={processing} onSubmit={handleSubmit} />);
}

export default EmployeeAdd;
