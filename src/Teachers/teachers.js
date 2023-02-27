
import Sidebar from "../sidebar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



const Teachers = (props)=>{
    const TeachereditNavigate = () => {
        navigate('/teachereditform')
}
    const navigate = useNavigate()

    return(
        <div className="container">
             <div className='table-sidebar'>{Sidebar()}</div>
            <div className="table-container">
                <h1>Teachers</h1>
                <Table className='Student-table'>
                <TableHead className='student-table-head'>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="center">Experience</TableCell>
                        <TableCell align="center">Subject</TableCell>
                        <TableCell align="center">Salary</TableCell>
                        <TableCell align="center">Contact NO</TableCell>
                        <TableCell align="center" colSpan={2}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.teacher.length > 0 ? (
                        props.teacher.map((teach) => (
                            <TableRow key={teach.id}>
                                <TableCell>{teach.name}</TableCell>
                                <TableCell align="center">{teach.experience}</TableCell>
                                <TableCell align="center">{teach.subject}</TableCell>
                                <TableCell align="center">{teach.salary}</TableCell>
                                <TableCell align="center">{teach.contact}</TableCell>
                                <TableCell align="center" className='student-table-btns'>
                                <Button  variant="contained" onClick={() => {props.editTeacher(teach);TeachereditNavigate()}}>Edit</Button>
                                </TableCell>
                                <TableCell className='student-table-btns'>
                                    <Button variant="contained" onClick={()=>props.DeleteTeacher(teach.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>No Teachers</TableCell>
                        </TableRow>
                    )
                    }
                </TableBody>
            </Table >
            <Button  variant="contained" onClick={() => navigate('/teachersaddform')}>Add Teachers</Button>
            </div>
        </div>
    )
}

export default Teachers;
