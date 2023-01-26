import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';


const EmployeeRow = (props) => {
    const { first_name, last_name, email, number, gender, id, photo } = props;
    const router = useRouter()

    const onDelete = id => console.log(">>>> DELETE", id)

    return (
        <TableRow>
            <TableCell>
                <Image src={photo || ""} alt='profile pic' width={60} height={60} />
            </TableCell>
            <TableCell>{first_name}</TableCell>
            <TableCell>{last_name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{number}</TableCell>
            <TableCell>{gender == "M" ? 'Male' : 'Female'}</TableCell>
            <TableCell>
                <IconButton onClick={() => router.push(`/employee/edit/${id}`)}><EditOutlined /></IconButton>
                <IconButton onClick={() => onDelete(id)}><DeleteOutline /></IconButton>
            </TableCell>
        </TableRow>
    )

}

const EmployeeListView = ({ employees }) => {
    const columns = [
        { key: 'image', lable: 'Image' },
        { key: 'first_name', lable: 'First Name' },
        { key: 'last_name', lable: 'Last Name' },
        { key: 'email', lable: 'Email' },
        { key: 'phone', lable: 'Phone' },
        { key: 'gender', lable: 'Gender' },
        { key: 'action', lable: 'Action' },
    ]
    return (
        <TableContainer component={Paper} sx={{mt: 2}}>
            <Table aria-label="employee list table" >
                <TableHead>
                    <TableRow>
                        {columns.map(col => (<TableCell key={col.key}>{col.lable}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(emp => (<EmployeeRow key={emp.id} {...emp} />))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default EmployeeListView;
