import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const Employee = () => {
    const classes = useStyles();

    const [employee, setEmployee] = useState([]);
    const [search, setSearch] = useState("")

    const getEmpData = async () => {
        try {
            const data = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(data.data);
            setEmployee(data.data)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getEmpData();
    }, []);

    return (
        <div>
            <TableContainer component={Paper}>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>name</StyledTableCell>
                            <StyledTableCell>username</StyledTableCell>
                            <StyledTableCell>email</StyledTableCell>
                            <StyledTableCell>action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            employee.filter(emp => {
                                if (search == "") {
                                    return emp
                                }
                                else if (emp.name.toLowerCase().includes(search.toLowerCase())) {
                                    return emp
                                }
                            })
                                .map((emp) => {
                                    return (
                                        <StyledTableRow key={emp.id}>
                                            <StyledTableCell>{emp.name}</StyledTableCell>
                                            <StyledTableCell>{emp.username}</StyledTableCell>
                                            <StyledTableCell>{emp.email}</StyledTableCell>
                                            <StyledTableCell><DeleteIcon/><EditIcon/></StyledTableCell>
                                        </StyledTableRow>
                                    )
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Employee