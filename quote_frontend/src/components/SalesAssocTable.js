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
                editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          setData([...data, newData]);
                          
                          resolve();
                        }, 1000)
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataUpdate = [...data];
                          const index = oldData.tableData.id;
                          dataUpdate[index] = newData;
                          setData([...dataUpdate]);
            
                          resolve();
                        }, 1000)
                      }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataDelete = [...data];
                          const index = oldData.tableData.id;
                          dataDelete.splice(index, 1);
                          setData([...dataDelete]);
                          
                          resolve()
                        }, 1000)
                      }),
                  }}
                data = {data}
                title="Sales Associate Database"
            />
        </div>
    )
}