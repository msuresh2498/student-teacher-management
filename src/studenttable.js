import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './sidebar';

const StudentTable = (props) => {
   // const [stud ,setStud] = useState(props)
    const navigate = useNavigate();
  

    const editNavigate = () => [
        navigate('/editstudform')
    ]

    return (
        <div className='container'>
           <div className='table-sidebar'>{Sidebar()}</div>
            <div className='table-container'>
            <h3>Student Details</h3>
            <Table className='Student-table'>
                <TableHead className='student-table-head'>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="center">Student ID</TableCell>
                        <TableCell align="center">Contact</TableCell>
                        <TableCell align="center">class</TableCell>
                        <TableCell align="center">mark</TableCell>
                        <TableCell align="center" colSpan={2}>Actions</TableCell>
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
                                <TableCell align="center" className='student-table-btns'>
                                <Button onClick={() => {props.editStudent(stud);editNavigate()}} variant="contained">Edit</Button>
                                </TableCell>
                                <TableCell className='student-table-btns'>
                                    <Button onClick={() => props.deleteUser(stud.id)} variant="contained">Delete</Button>
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
        </div>
    )
}

export default StudentTable;
