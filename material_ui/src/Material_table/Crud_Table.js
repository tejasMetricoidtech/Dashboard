import React, { useState } from "react";
import MaterialTable from "material-table"


const empList = [
    { id: 1, name: "tejas", email: "tejas.d.talkar@gmail.com", phone: 8850618762, city: "mumbai" },

]

function Crud_Table() {

    const [data, setData] = useState(empList)
    const columns = [
        { title: "ID", field: "id", editable: false },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone", field: "phone" },
        { title: "city", field: "city" }
    ]

    return (
        <div>
            <MaterialTable
                title="Employee Data"
                data={data}
                columns={columns}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                    }),
                    onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows.splice(index, 1)
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                    }),
                    onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                        const index = oldRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows[index] = updatedRow
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                    })
                }}
                options={{
                    actionsColumnIndex: -1,
                    addRowPosition: "first"
                }}
            />
        </div>
    )
}
export default Crud_Table;