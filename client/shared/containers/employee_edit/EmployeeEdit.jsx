import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeForm } from "@/shared/containers";
import { getEmployee, updateEmployee } from '@/shared/services';
import { useRouter } from 'next/router';


const EmployeeEdit = () => {
    const router = useRouter();
    const processing = useSelector(state => (state.employees.saving));
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState(null)
    const employeeId = router.query.employeeId;

    const handleSubmit = (data) => {
        updateEmployee(dispatch, data);
    }

    useEffect(() => {
        let mounted = true;
        (async() => {
            if (mounted) {
                const empData = await getEmployee(dispatch, employeeId);
                console.log(">>>>>>xxx", empData)
                setEmployee(empData)
            }
        })();

        return () => (mounted = false)
    }, [])
    
    return (
        <>
        {employeeId}
            {employee ? (<EmployeeForm  inProgress={processing} onSubmit={handleSubmit} employeeData={employee} />) : (<></>)}
        </>
    );
}

export default EmployeeEdit;
