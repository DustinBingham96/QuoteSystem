import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import QuoteTableSales from '../components/QuoteTableSales';
import NewQuoteForm from '../components/NewQuoteForm';
import EditQuoteForm from '../components/EditQuoteForm';
import '../css/Sales.css'

var username = sessionStorage.getItem("username")

function SalesLanding() {
    return (
        <div>
            <Header />
            <span className="title">
            <h1 className="heading">Sales</h1>
            <h1 className="heading">Welcome {username}! </h1>
            </span>
            <Grid>
                <Grid container  row justify="space-evenly">
                    <Grid item>
                        <Paper className="sales">
                            <EditQuoteForm />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="sales">
                            <NewQuoteForm />
                        </Paper>
                    </Grid> 
                </Grid>
                <Grid item>
                            <QuoteTableSales />
                    </Grid>
                </Grid>
        </div>
    );
}

export default SalesLanding;