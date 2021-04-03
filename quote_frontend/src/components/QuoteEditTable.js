import React, {useState} from 'react'
import MaterialTable from 'material-table';



export default function QuoteEditTable() {

    const [data, setData] = useState([
        {id: 4535435, custid: 4352345, notes: '12345', finalized: false, total: 3457823}
    ]);

    return (
        <div>
            <MaterialTable
                columns = {[
                    {title: 'ID', field: 'id', type: 'numeric'},
                    {title: 'Customer ID', field: 'custid', type: 'numeric'},
                    {title: 'Notes', field: 'notes'},
                    {title: 'Finalized?', field: 'finalized', type: 'boolean'},
                    {title: 'Total', field: 'total', type: 'numeric'}
                ]}
                data = {data}
                title="Sales Associate Database"
            />
        </div>
    )
}