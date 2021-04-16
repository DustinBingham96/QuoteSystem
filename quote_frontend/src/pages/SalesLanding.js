import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import QuoteTableSales from '../components/QuoteTableSales';
import NewQuoteForm from '../components/NewQuoteForm';
import EditQuoteForm from '../components/EditQuoteForm';

var username = sessionStorage.getItem("username")

function SalesLanding() {
    return (
        <div>
            <Header />
            <h1>Welcome {username}! </h1>
                <Grid container row>
                    <Grid item>
                        <QuoteTableSales />
                    </Grid>
                    <Grid item>
                        <NewQuoteForm />
                    </Grid>
                    <Grid item>
                        <EditQuoteForm />
                    </Grid>
                </Grid>
        </div>
    );
}

export default SalesLanding;