import React from 'react';
import Header from '../components/Header';
import SalesAssocTable from '../components/SalesAssocTable';
import Grid from '@material-ui/core/Grid'
import NewAssocForm from '../components/NewAssocForm';
import DeleteAssocForm from '../components/DeleteAssocForm';
import EditAssocForm from '../components/EditAssocForm';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import '../css/Header.css'

 
function AdminAssociate() {
    return (
        <div>
            <Header />
            <Typography>
            <h2 className="header">Associate Add/Edit/Delete</h2>
            </Typography>
            <SalesAssocTable />
                <Grid container row xs={16} justify="space-evenly">
                    <Grid item>
                        <Paper square>
                        <NewAssocForm />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper square>
                        <DeleteAssocForm />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper square>
                        <EditAssocForm />
                        </Paper>
                    </Grid>
                </Grid>
        </div>
    );
}

export default AdminAssociate;