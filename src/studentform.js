import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Studentaddform = (props) => {
    const initialFormState = { id: null, name: '', studid: '', contact: '', class: '', mark: '' }

    const [stud, setStud] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setStud({ ...stud, [name]: value })
    }
    return (
        <div className="addStudent-container" onSubmit={
            event => {
                event.preventDefault();
                if (!stud.name || !stud.studid || !stud.contact || !stud.class || !stud.mark) return;
                props.addStud(stud);
                setStud(initialFormState);
            }
        }>
            <h3>Add Student Details</h3>
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={stud.name} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="Student ID" variant="outlined" name="studid" value={stud.studid} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="Contact" variant="outlined" name="contact" value={stud.contact} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="Class" variant="outlined" name="class" value={stud.class} onChange={handleInputChange} />
            <TextField id="outlined-basic" label="Mark" variant="outlined" name="mark" value={stud.mark} onChange={handleInputChange} />
            <Button variant="contained">Add Student</Button>
        </div>
    )
}
export default Studentaddform;