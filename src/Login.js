import { Link, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const StudLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="login-container">
            <div>
                <h2> SIGN IN</h2>
                <h4> with your student account</h4>
            </div>
            <TextField variant="outlined" label="Username" className="studlogin-label" />
            <TextField variant="outlined" label="password" className="studlogin-label" />
            <Button variant="contained">Sign in</Button>
            <Link href="#">Forgot Your Password?</Link>
            <p>Don't have an accoount? <Button variant="text" onClick={()=>navigate('/studsignup')}>SignUp</Button></p>

        </div>

    )
}
export default StudLogin;

export const TeacherLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="login-container">
            <div>
                <h2> SIGN IN</h2>
                <h4> with your Teacher account</h4>
            </div>
            <TextField variant="outlined" label="Username" className="Teacherlogin-label"/>
            <TextField variant="outlined" label="password" className="Teacherlogin-label"/>
            <Button variant="contained">Login</Button>
            <p>Don't have an accoount? <Button variant="text" onClick={()=>navigate('/teachersignup')}>SignUp</Button></p>
        </div>
    )
}
