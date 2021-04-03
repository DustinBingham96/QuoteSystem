import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteEditTable from '../components/QuoteEditTable';
import { Grid } from '@material-ui/core';

export default function QuoteEditPage() {
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item>
                    <QuoteEditTable />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}