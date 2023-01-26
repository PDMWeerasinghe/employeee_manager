import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useRouter } from 'next/router';

const Toolbar = ({viewMode, onViewModeChange}) => {

    const router = useRouter()

    return (
        <Box gap={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button onClick={() => router.push("/employee/add")}>
                Add Employee
            </Button>

            <IconButton onClick={onViewModeChange}>
                {viewMode == 'grid' ? <ViewListIcon /> : <ViewModuleIcon />}
            </IconButton>
        </Box>
    );
};


export default Toolbar;
