import React from 'react';
import Header from '../components';
import Footer from '../components';
import QuoteTable from '../components';
import SalesAssocTable from '../components';

export default function HomePage() {
    return (
        <div>
            <Header />
            <SalesAssocTable />
            <QuoteTable />
            <Footer />
        </div>
    )
}

