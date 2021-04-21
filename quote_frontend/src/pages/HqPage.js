import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import QuoteTableHq from '../components/QuoteTableHq';
import EditQuoteForm from '../components/EditQuoteForm';
import SanctionForm from '../components/SanctionForm';
import FinalizeForm from '../components/FinalizeForm';
import Typography from '@material-ui/core/Typography';
import '../css/Header.css';

function HqPage() {
    return(
        <div>
            <Header />
            <Typography>
                <h2 className="header">HQ Edit/Sanction/Process</h2>
            </Typography>
                <Grid container row justify="space-evenly">
                    <Grid item>
                        <QuoteTableHq />
                    </Grid>
                    <Grid item>
                    <Paper square>
                        <EditQuoteForm />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper square>
                        <SanctionForm />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper square>
                        <FinalizeForm />
                        </Paper>
                    </Grid>
                </Grid>
        </div>
    );
}

export default HqPage;