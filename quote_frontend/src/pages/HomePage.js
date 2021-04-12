import React from 'react';
import Header from '../components/Header';
import QuoteTable from '../components/QuoteTable';
import SalesAssocTable from '../components/SalesAssocTable';
import Grid from '@material-ui/core/Grid'
import NewAssocForm from '../components/NewAssocForm';
import DeleteAssocForm from '../components/DeleteAssocForm';
import NewQuoteForm from '../components/NewQuoteForm';
import LoginForm from '../components/LoginForm';
 
function HomePage() {
    return (
        <div>
            <Header />
                <Grid container row>
                    <Grid item>
                        <LoginForm />
                    </Grid>
                </Grid>
        </div>
    );
}

export default HomePage;