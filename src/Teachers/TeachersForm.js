import {  TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";

export const TeachersAddForm =(props)=>{
    const initialteacherFormState = { id: null, name: '', experience: '', subject: '', salary: '', contact: '' }
    const [teach, setTeach]= useState(initialteacherFormState)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setTeach({ ...teach, [name]: value })
    }
    return(
        <div className="container">
            <div className='table-sidebar'>{Sidebar()}</div>
            <div className="table-container">
            <Form className="addStudent-container" onSubmit={
            event => {
                event.preventDefault();
                if (!teach.name || !teach.experience || !teach.subject || !teach.salary || !teach.contact) return;
                props.addTeacher(teach);
                setTeach(initialteacherFormState);
            }
        }>
            <h3>Add Teacher</h3>
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={teach.name} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="Experience" variant="outlined" name="experience" value={teach.experience} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="subject" variant="outlined" name="subject" value={teach.subject} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="salary" variant="outlined" name="salary" value={teach.salary} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="contact" variant="outlined" name="contact" value={teach.contact} onChange={handleInputChange} />
            <Button className='button-form' variant="primary" type="submit">Add Teacher </Button>
            </Form>
        </div>
        </div>
    )
}


export const EditTeacherForm=(props)=>{
    const navigate = useNavigate();

    const editNavigate = () => [
        navigate('/teachers')
    ]
    const [teach, setTeach]= useState(props.currentTeach)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setTeach({ ...teach, [name]: value })
    }


    return(
        <div className="container">
        <div className='table-sidebar'>{Sidebar()}</div>
        <div className="table-container">
        <Form className="addStudent-container" onSubmit={
            event => {
                event.preventDefault();
                if (!teach.name || !teach.experience || !teach.subject || !teach.salary || !teach.contact) return;
                props.updateTeacher(teach.id, teach)
                navigate('/teachers');
            }
        }>
            <h3>Add Teacher</h3>
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={teach.name} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="Experience" variant="outlined" name="experience" value={teach.experience} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="subject" variant="outlined" name="subject" value={teach.subject} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="salary" variant="outlined" name="salary" value={teach.salary} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="contact" variant="outlined" name="contact" value={teach.contact} onChange={handleInputChange} />
            <Button className='button-form' variant="primary" type="submit">Update</Button>
            <Button className='button-form' variant="primary" onClick={()=>{
                    props.setTeachEditing(false);editNavigate();;
                }}>Cancel</Button>
            </Form>
    </div>
    </div>
    )
}