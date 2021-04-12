import React from 'react';
import Header from '../components/Header';

import Grid from '@material-ui/core/Grid'



function handleSubmitAssoc()
{
    window.open("http://localhost:3000/AdminAssociate", "_self")
}
function handleSubmitQuote()
{
    window.open("http://localhost:3000/AdminQuote", "_self")
}
function AdminPage() {
    return (
        <div>
            <Header />
                <Grid container row>
                    <Grid item>
                        <h1>Welcome Admin!</h1>
                        <button name="Associate" onClick={handleSubmitAssoc}>Go To Associate Page</button>
                        <button name="Quote" onClick={handleSubmitQuote}>Go To Quote Page</button>
                    </Grid>
                </Grid>
        </div>
    );
}

export default AdminPage;