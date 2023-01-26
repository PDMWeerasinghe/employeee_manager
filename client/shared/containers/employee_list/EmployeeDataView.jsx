import React from 'react';
import { useSelector } from 'react-redux';
import { EmployeeGridView, EmployeeListView } from '@/shared/components';

const EmployeeDataView = ({employees}) => {
    const mode = useSelector(state => (state.viewMode.value));

    return mode == 'list' ? <EmployeeListView employees={employees} /> : <EmployeeGridView employees={employees} />
}

export default EmployeeDataView;
