import React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';

const EmployeeCard = (props) => {
    const {first_name, last_name, email, number, gender, id, photo} = props;
    const router = useRouter()
    
    return (
        <Card sx={{ m: 2, width: '200px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="140px"
                    height="140px"
                    image={photo || ""}
                />
                <CardContent>
                    <Typography variant="body2">{ `${first_name} ${last_name}` }</Typography>
                    <Typography variant="body2">{ email }</Typography>
                    <Typography variant="body2">{ number }</Typography>
                    <Typography variant="body2">{ gender == 'M' ? "Male" : "Female" }</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: 'flex-end'}}>
                <IconButton onClick={() => router.push(`/employee/edit/${id}`)}><EditOutlined /></IconButton>
                <IconButton><DeleteOutlined /></IconButton>
            </CardActions>
        </Card>
    );
}

const EmployeeGridView = ({ employees }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: 'space-evenly', flexWrap: 'wrap', mt: 2 }}>
            {employees.map(emp => (<EmployeeCard key={emp.id} {...emp} />))}
        </Box>
    );
};


export default EmployeeGridView;
