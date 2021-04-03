import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SalesAssocEditTable from '../components/SalesAssocEditTable';
import {Grid} from '@material-ui/core';

export default function SalesAEditPage() {
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item>
                    <SalesAssocEditTable />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}