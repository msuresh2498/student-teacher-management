import { Button, Card, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="Home">
            <div className="Home-bar">
                <h1 className="home-subhead">Learning Today</h1>
                <h1 className="home-subhead">Leading tommorow</h1>
            </div>
            <div className="Home-cards">
            <Card className="Home-card">
                    <CardMedia
                        className="Card-img"
                        component="img"
                        height="140"
                        image="https://img.freepik.com/premium-vector/man-employee-love-sign-hand-with-laptop-cartoon-vector-icon-illustration_480044-863.jpg"
                        alt="green iguana"
                    />
                    <Button className="stud-login-btn" variant="text"
                        onClick={() => navigate('/admindashboard')}> Admin
                    </Button>
                </Card>
                <Card className="Home-card">
                    <CardMedia
                        className="Card-img"
                        component="img"
                        height="140"
                        image="https://static.vecteezy.com/system/resources/previews/007/746/077/original/cute-little-boy-student-posing-cartoon-illustration-cartoon-clipart-vector.jpg"
                        alt="green iguana"
                    />
                    <Button className="stud-login-btn" variant="text"
                        onClick={() => navigate('/studlogin')}> Student Login
                    </Button>
                </Card>
                <Card className="Home-card">
                    <CardMedia
                        className="Card-img2"
                        component="img"
                        height="140"
                        image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/38965/woman-teacher-clipart-xl.png"
                        alt="green iguana"
                    />
                    <Button className="stud-login-btn" variant="text"
                        onClick={() => navigate('/teacherlogin')}> Teachers Login
                    </Button>
                </Card>
            </div>
        </div>

    )
}
export default Home;