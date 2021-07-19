import React, { useEffect, useState } from "react";
import MaterialTable from "material-table"

export const Table = () => {
    
    const [data, setData] = useState([])
    const columns= [
        {
            title:'Name' , field:'name'
        },
        {
            title:'Username' , field:'username'
        },
        {
            title:'Email' , field:'email'
        },
        {
            title:'phone' , field:'phone'
        },
        {
            title:'Action' 
        }
    ]

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(resp=>setData(resp))
    },[])

    return (
        <div>
            <MaterialTable
                title = "Material table"
                data= {data}
                columns= {columns}
                options= {{
                    search: true,
                    paging : false,
                    filtering: true,
                    exportButton: true
                }}
            />
        </div>
    )
}
export default Table