import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';



export default function QuoteTable() {

    const [data, setData] = useState([])
    const columns = [
        {title: "QuoteID", field: "qID", type:"numeric",},
        {title: "CustomerID", field: "cID", type:"numeric"},
        {title: "AssociateID", field: "aID", type: "numeric"},
        {title: "Quote Text", field: "quote"},
        {title: "Secret Text", field: "secret"},
        {title: "Customer Email", field: "email"},
        {title: "Finalized", field: "finalized", type: "numeric"}
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
                icons={{ Filter: () => <div />}}
                options={{  filtering: true}}
            />
        </div>
    );
}