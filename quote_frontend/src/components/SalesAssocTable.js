import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';

export default function SalesAssocTable() {


    const [data, setData] = useState([])
    const columns = [
        {title: "ID", field: "ID", type: "numeric"},
        {title: "username", field:"userID"},
        {title: "Password", field: "password"},
        {title: "Commission", field: "commission"},
        {title: "Address", field: "address"}
    ]

    useEffect(()=>{
        fetch("http://localhost/salesselectall.php")
        .then(response=>response.json())
        .then(response=>setData(response))
    })


    return (
        <div>
            <MaterialTable
                title="Sales Associate Database"
                data = {data}
                columns = {columns}
                icons={{ Filter: () => <div />}}
                options={{  filtering: true}}
            />
        </div>
    );
}