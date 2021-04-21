import React from 'react';
import Header from '../components/Header';
import QuoteTable from '../components/QuoteTable';
import SalesAssocTable from '../components/SalesAssocTable';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import NewAssocForm from '../components/NewAssocForm';
import DeleteAssocForm from '../components/DeleteAssocForm';
import NewQuoteForm from '../components/NewQuoteForm';
import LoginForm from '../components/LoginForm';
import '../css/HomePage.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: "none",
      backgroundColor: "#132C33" 
    } 
  }));
 
function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} position="static">
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