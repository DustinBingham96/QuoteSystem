import React from 'react';
import Header from '../components/Header';
import QuoteTable from '../components/QuoteTable';
import SalesAssocTable from '../components/SalesAssocTable';
import Grid from '@material-ui/core/Grid'
import NewAssocForm from '../components/NewAssocForm';
 
function HomePage() {
    return (
        <div>
            <Header />
                <Grid container row>
                    <Grid item>
                        <SalesAssocTable />
                    </Grid>
                    <Grid item>
                        <QuoteTable />
                    </Grid>
                    <Grid item>
                        <NewAssocForm />
                    </Grid>
                </Grid>
        </div>
    );
}

export default HomePage;