import React from 'react';
import Header from '../components/Header';
import QuoteTable from '../components/QuoteTable';
import Typography from '@material-ui/core/Typography'
import '../css/Header.css';
 
export default function AdminQuote() {
    return (
        <div>
            <Header />
            <Typography>
                <h2 className="header">All Quotes</h2>
            </Typography>
            <QuoteTable />
        </div>
    );
}
