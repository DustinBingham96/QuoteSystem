import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';



export default function QuoteTable() {

    const [data, setData] = useState([])
    const columns = [
        {title: "QuoteID", field: "qID"},
        {title: "CustomerID", field: "cID"},
        {title: "AssociateID", field: "aID"},
        {title: "Quote Text", field: "quote"},
        {title: "Secret Text", field: "secret"},
        {title: "Customer Email", field: "email"}
    ]

    useEffect(()=>{
        fetch("http://localhost/quoteselectall.php")
        .then(response=>response.json())
        .then(response=>setData(response))

    })

    

    return (
        <div>
            <MaterialTable
                title="Quote Database"
                data = {data}
                columns = {columns}
            />
        </div>
    );
}