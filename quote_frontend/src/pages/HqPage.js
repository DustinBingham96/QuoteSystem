import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import QuoteTableHq from '../components/QuoteTableHq';
import EditQuoteForm from '../components/EditQuoteForm';
import SanctionForm from '../components/SanctionForm';
import FinalizeForm from '../components/FinalizeForm';

function HqPage() {
    return(
        <div>
            <Header />
            <h1>Hq Edit/Sanction/Process</h1>
                <Grid container row>
                    <Grid item>
                        <QuoteTableHq />
                    </Grid>
                    <Grid item>
                        <EditQuoteForm />
                    </Grid>
                    <Grid item>
                        <SanctionForm />
                    </Grid>
                    <Grid item>
                        <FinalizeForm />
                    </Grid>
                </Grid>
        </div>
    );
}

export default HqPage;