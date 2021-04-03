import React, {useState} from 'react'
import MaterialTable from 'material-table';



export default function SalesAssocTable() {

    const [data, setData] = useState([
        {id: 4535435, userid: 'googly', password: '12345', commission: 1234.32, address: '343 Monel lane'}
    ]);

    return (
        <div>
            <MaterialTable
                columns = {[
                    {title: 'ID', field: 'id', type: 'numeric'},
                    {title: 'UserID', field: 'userid'},
                    {title: 'Password', field: 'password'},
                    {title: 'Commission', field: 'commission', type: 'numeric'},
                    {title: 'Address', field: 'address'}
                ]}
                
                data = {data}
                title="Sales Associate Database"
            />
        </div>
    );
}