import React from "react"
import EmployeeTable from "./EmployeeTable"
import EmployeeData from "./EmployeeData"

function App() {
    const empComponent = EmployeeData.map(Emp => <EmployeeTable
        key={Emp.id}
        name={Emp.name}
        Account_manager={Emp.Account_manager}
        Data_Source={Emp.Data_Source}
        Dashboard={Emp.Dashboard}
        Materics={Emp.Materics}
    />)
    return (
        <>
            {empComponent}
        </>
    )
}
export default App