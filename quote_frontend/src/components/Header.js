import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import '../css/Header.css'

const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: "none",
      backgroundColor: "#132C33" 
    } 
  }));

export default function Header() {

    const classes = useStyles();
    return (
        <div>

                <AppBar className={classes.root} position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            4B Quotes: Management System
                        </Typography>
                        <div className="buttons">
                        <Button href="http://localhost:3000/salesLand">
                            Sales
                        </Button>
                        <Button href="http://localhost:3000/adminPage">
                            Admin
                        </Button>
                        <Button href="http://localhost:3000/hqPage">
                            HQ
                        </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    )
}