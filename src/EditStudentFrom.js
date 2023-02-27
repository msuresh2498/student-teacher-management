import { Alert, Button, TextField } from "@mui/material"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Sidebar from "./sidebar"

const EditStudentForm = (props) => {

    const navigate = useNavigate();
    const editNavigate = () => [
        navigate('/studtable')
    ]
    const [stud, setStud] = useState(props.currentStud)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setStud({ ...stud, [name]: value })
    }

    return (
        <div className="container">
            <div className='table-sidebar'>{Sidebar()}</div>
            <div className="table-container">
            <Form className="addStudent-container" onSubmit={
                event => {
                    event.preventDefault();
                    if (!stud.name || !stud.studid || !stud.contact || !stud.class || !stud.mark) return;
                    props.updateStud(stud.id, stud);
                    navigate('/studtable');
                }
            }>
                <h3>Edit Student Details</h3>
                <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={stud.name} onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Student ID" variant="outlined" name="studid" value={stud.studid} onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Contact" variant="outlined" name="contact" value={stud.contact} onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Class" variant="outlined" name="class" value={stud.class} onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Mark" variant="outlined" name="mark" value={stud.mark} onChange={handleInputChange} />
                <Button className='button-form' variant="primary" type="submit">Update Student </Button>
                <Button className='button-form' variant="primary" onClick={()=>{
                    props.setStudediting(false);editNavigate();;
                }}>Cancel </Button>
            </Form>
        </div>
        </div>
    )
}

export default EditStudentForm;