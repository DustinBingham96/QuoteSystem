import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Header() {
    return (
        <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            4B Quotes: Management System
                        </Typography>
                        <Button href="http://localhost:3000/salesLand">
                            Sales
                        </Button>
                        <Button href="http://localhost:3000/adminPage">
                            Admin
                        </Button>
                        <Button href="http://localhost:3000/hqLand">
                            HQ
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
    )
}