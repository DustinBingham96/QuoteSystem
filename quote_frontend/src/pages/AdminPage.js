import React from 'react';
import Header from '../components/Header';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



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
            <Typography>
                <h1>Welcome Admin!</h1>
            </Typography>
            <Grid container row justify="space-evenly" alignItems="stretch">
                <Grid item>
                    <Button name="Associate" onClick={handleSubmitAssoc}>Go To Associate Page</Button>
                </Grid>
                <Grid item>
                    <Button name="Quote" onClick={handleSubmitQuote}>Go To Quote Page</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default AdminPage;