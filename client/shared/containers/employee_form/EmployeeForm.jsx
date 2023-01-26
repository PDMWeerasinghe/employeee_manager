import React, { useEffect, useState } from 'react';
import { EmployeeForm as EmployeeFormComponent } from '@/shared/components';

const fromProps = {
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    gender: 'M'
}

const EmployeeForm = (props) => {

    const { inProgress, onSubmit, employeeData } = props;

    
    const [formData, setFormData] = useState(fromProps);
    const [errors, setErrors ] = useState({})

    useEffect(() => {
        if (employeeData) {
            setFormData(employeeData);
        }
    }, [])
    
    console.log("XXXXXXX", employeeData)

    const isValid = () => {
        let result = {}
        if (!formData.first_name.match(/^[0-9a-zA-Z]+$/)) {
            result['first_name'] = "First name cannot have any special chatacters"
        }

        if (!(formData.first_name.length >= 6 && formData.first_name.length <= 10)) {
            result['first_name'] = "First name must have 6 - 10 chatacters"
        }

        if (!formData.last_name.match(/^[0-9a-zA-Z]+$/)) {
            result['last_name'] = "Last name cannot have any special chatacters"
        }

        if (!(formData.last_name.length >= 6 && formData.last_name.length <= 10)) {
            result['last_name'] = "Last name must have 6 - 10 chatacters"
        }

        if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            result['email'] = "Email is not valid"
        }

        if (!formData.number.match(/^(\+94)\d{9}$/)) {
            result['number'] = "Phone is not valid"
        }

        if (!(formData.gender == "M" || formData.gender == "F")) {
            result['gender'] = "Please select gender"
        }


        setErrors(result)
        return !Object.keys(result).length
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!isValid()) return;

        onSubmit(formData)
    }

    const handleChange = (e) => {
        setFormData((pre => ({
            ...pre,
            [e.target.name]: e.target.value
        })))
    }

    const hasError = (field) => {
        return errors[field] ? { error: true, helperText: errors[field]} : {}
    }

    return (<EmployeeFormComponent inProgress={inProgress} hasError={hasError} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />);
};


export default EmployeeForm;
