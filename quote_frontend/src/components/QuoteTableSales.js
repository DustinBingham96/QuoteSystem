import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';
import axios from 'axios';


var id = sessionStorage.getItem("ID")
const form = new FormData();
form.append("ID", id);
axios.post("http://localhost/quoteselectsales.php", form).then(function(response){
    console.log(response.data);
    
});


export default function QuoteTableSales() {



    
    const [data, setData] = useState([])
    const columns = [
        {title: "QuoteID", field: "qID"},
        {title: "CustomerID", field: "cID"},
        {title: "Quote Text", field: "quote"},
        {title: "Secret Text", field: "secret"},
        {title: "Customer Email", field: "email"},
        {title: "Finalized", field: "finalized"}
        
    ]

    useEffect(()=>{
        axios.post("http://localhost/quoteselectsales.php", form).then(function(response){
            setData(response.data);
            
        });

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