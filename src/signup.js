import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const StudSignup =()=>{
    const navigate = useNavigate()
    return (
        <div className="Stud-signup-container">
            <h1>Student Signup</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Contact No" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained">Sign up</Button>
            <p>Already have an account? <Button variant="contained" onClick={()=>navigate('/studlogin')}>Sign in</Button></p>
        </div>

    )
}

export const TeacherSignup =()=>{
    const navigate = useNavigate()
    return (
        <div className="Stud-signup-container">
            <h1>Teacher Signup</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Contact No" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained">Sign up</Button>
            <p>Already have an account? <Button variant="contained" onClick={()=>navigate('/teacherlogin')}>Sign in</Button></p>
        </div>

    )
}

