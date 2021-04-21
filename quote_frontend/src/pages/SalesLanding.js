import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import QuoteTableSales from '../components/QuoteTableSales';
import NewQuoteForm from '../components/NewQuoteForm';
import EditQuoteForm from '../components/EditQuoteForm';
import '../css/Sales.css'

var username = sessionStorage.getItem("username")

function SalesLanding() {
    return (
        <div>
            <Header />
            <div className="header">
                <Typography>
            <h2 className="heading">Sales</h2></Typography>
            <Typography><h4 className="heading" >Welcome {username}! </h4></Typography>

            </div>
            <Grid container>
                <Grid container item row justify="space-evenly">
                    <Grid item className="salesGrid">
                        <Paper className="sales">
                            <EditQuoteForm />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="sales">
                            <NewQuoteForm />
                        </Paper>
                    </Grid> 
                </Grid >
                <Grid item>
                            <QuoteTableSales />
                </Grid>
            </Grid>
        </div>
    );
}

export default SalesLanding;