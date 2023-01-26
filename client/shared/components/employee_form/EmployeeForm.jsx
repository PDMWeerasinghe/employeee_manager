import React from 'react';
import { Button, FormLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const FormRow = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
            {children}
        </Box>
    )
}

const EmployeeForm = (props) => {

    const { inProgress, hasError, handleChange, handleSubmit, formData } = props;

    console.log("><><><><><", formData)

    const router = useRouter();

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={() => router.push("/employee/list")}>
                    List View
                </Button>
            </Box>
            <Paper elevation={3} sx={{ px: 3, py: 6, width: '50%', mx: 'auto', borderRadius: 5 }}>
                <form onSubmit={handleSubmit}>
                    <FormRow>
                        <FormLabel sx={{ flexBasis: '25%' }} htmlFor='first_name' >First Name</FormLabel>
                        <TextField sx={{ flexBasis: '75%' }} name="first_name" onChange={handleChange} value={formData.first_name} {...hasError('first_name')} variant="filled" />
                    </FormRow>
                    <FormRow>
                        <FormLabel sx={{ flexBasis: '25%' }} htmlFor='last_ame' >Last Name</FormLabel>
                        <TextField sx={{ flexBasis: '75%' }} name="last_name" onChange={handleChange} value={formData.last_name} {...hasError('last_name')} variant="filled" />
                    </FormRow>
                    <FormRow>
                        <FormLabel sx={{ flexBasis: '25%' }} htmlFor='email' >Email</FormLabel>
                        <TextField sx={{ flexBasis: '75%' }} name="email" onChange={handleChange} value={formData.email} variant="filled" {...hasError('email')} />
                    </FormRow>
                    <FormRow>
                        <FormLabel sx={{ flexBasis: '25%' }} htmlFor='phone'>Phone</FormLabel>
                        <TextField sx={{ flexBasis: '75%' }} name="number" onChange={handleChange} value={formData.number} variant="filled" {...hasError('number')} />
                    </FormRow>
                    <FormRow>
                        <FormLabel sx={{ flexBasis: '25%' }} htmlFor='gender' >Gender</FormLabel>
                        <Select name='gender' onChange={handleChange} value={formData.gender} variant="filled" >
                            <MenuItem value="M">Male</MenuItem>
                            <MenuItem value="F">Female</MenuItem>
                        </Select>
                    </FormRow>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type='submit' variant='outlined' sx={{ px: 5 }} disabled={inProgress}> {formData.id ? 'Update' : 'Add'}</Button>
                    </Box>
                </form>
            </Paper>
        </>
    );
};

export default EmployeeForm;
