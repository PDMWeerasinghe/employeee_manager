import { Container, Grid } from '@mui/material';
import React from 'react';
import { Nav } from '../../components';


const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Container maxWidth={'lg'} >
                <Grid >
                    {children}
                </Grid>
            </Container>
        </>
    );
};

export default Layout;
