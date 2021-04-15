import React from 'react';
import Header from '../components/Header';
import QuoteTable from '../components/QuoteTable';

 
export default function AdminQuote() {
    return (
        <div>
            <Header />
            <h1>All Quotes</h1>
            <QuoteTable />
        </div>
    );
}
