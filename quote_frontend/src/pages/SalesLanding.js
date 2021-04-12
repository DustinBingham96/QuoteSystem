import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../components/LoginForm';

var username = sessionStorage.getItem("username")

function SalesLanding() {
    return (
        <div>
            <Header />
                <Grid container row>
                    <Grid item>
                        <h1>Welcome {username}! </h1>
                    </Grid>
                </Grid>
        </div>
    );
}

export default SalesLanding;