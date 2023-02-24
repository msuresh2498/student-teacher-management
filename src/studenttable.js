import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const StudentTable = (props) => {

    return (
        <div>
            <h3>Student Details</h3>
            <Table className='Student-table'>
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="center">Student ID</TableCell>
                        <TableCell align="center">Contact</TableCell>
                        <TableCell align="center">class</TableCell>
                        <TableCell align="center">mark</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.student.length > 0 ? (
                        props.student.map((stud) => (
                            <TableRow key={stud.id}>
                                <TableCell>{stud.name}</TableCell>
                                <TableCell align="center">{stud.studid}</TableCell>
                                <TableCell align="center">{stud.contact}</TableCell>
                                <TableCell align="center">{stud.class}</TableCell>
                                <TableCell align="center">{stud.mark}</TableCell>
                                <TableCell>
                                    <Button variant="contained">Edit</Button>
                                    <Button variant="contained">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>No Student</TableCell>
                        </TableRow>
                    )
                    }
                </TableBody>
            </Table >
        </div>
    )
}

export default StudentTable;
