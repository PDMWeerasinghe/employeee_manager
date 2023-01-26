import React, { useEffect } from 'react';
import Toolbar from './Toolbar';
import { Box, Grid } from '@mui/material';
import EmployeeDataView from './EmployeeDataView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '@/shared/redux/reducers/employeeSlice';
import { fetchAllEmployees } from '@/shared/services';

const EmployeeList = () => {

    const dispatch = useDispatch();
    const employees = useSelector(state => (state.employees.list));



    useEffect(() => {
        let mouted = true;
        (async () => {
            if (mouted) {
                const data = fetchAllEmployees(dispatch);
                // dispatch(fetchEmployees(data))
            }
        })();
        return () => (mouted = false);
    }, []);

    console.log(">>>> employees", employees)
    return (
        <Grid sx={{ mt: 3 }}>
            <Toolbar />
            {
                (employees.length)
                    ? (<EmployeeDataView employees={employees} />)
                    : (<Box sx={{ m: 5, p: 5, display: 'flex', justifyContent: 'center', alignContent: 'center', border: 'dashed 3px GrayText', borderRadius: '10px', color: 'GrayText' }} >
                        <h3>No Employee Data Found</h3>
                    </Box>)
            }
        </Grid>
    );
}

export default EmployeeList;
