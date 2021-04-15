import React from 'react';
import Header from '../components/Header';
import SalesAssocTable from '../components/SalesAssocTable';
import Grid from '@material-ui/core/Grid'
import NewAssocForm from '../components/NewAssocForm';
import DeleteAssocForm from '../components/DeleteAssocForm';
import EditAssocForm from '../components/EditAssocForm';

 
function AdminAssociate() {
    return (
        <div>
            <Header />
            <h1>Associate Add/Edit/Delete</h1>
            <SalesAssocTable />
                <Grid container row>
                    <Grid item>
                        <NewAssocForm />
                    </Grid>
                    <Grid item>
                        <DeleteAssocForm />
                    </Grid>
                    <Grid item>
                        <EditAssocForm />
                    </Grid>
                </Grid>
        </div>
    );
}

export default AdminAssociate;