import React from 'react';
import Header from '../components/Header';
import QuoteTable from '../components/QuoteTable';
import SalesAssocTable from '../components/SalesAssocTable';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import NewAssocForm from '../components/NewAssocForm';
import DeleteAssocForm from '../components/DeleteAssocForm';
import NewQuoteForm from '../components/NewQuoteForm';
import LoginForm from '../components/LoginForm';
import '../css/HomePage.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
 
function HomePage() {
    return (
        <div>
            <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            4B Quotes: Management System
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container row justify="center" alignItems="stretch">
                    <Grid item>
                        <Card className="loginCard" square>
                        <LoginForm />
                        </Card>
                    </Grid>
                </Grid>
        </div>
    );
}

export default HomePage;