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
                title="Quote Database"
            />
        </div>
    )
}