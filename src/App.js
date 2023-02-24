import Home from './Home';
import './App.css';
import { useState } from 'react';
import StudentTable from './studenttable';
import { TeacherLogin } from './Login';
import { AppBar, Button, createTheme, Paper, ThemeProvider, Toolbar } from '@mui/material';
import StudLogin from './Login';
import { StudSignup, TeacherSignup } from './signup'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Studentaddform from './studentform';
import { AdminDash } from './AdminDash';

function App() {

  const InitialStudentDetails = [
    {
      id: 1,
      name: "suresh",
      studid: 504,
      contact: "9452458245",
      class: "12th",
      mark: "65%"
    },
    {
      id: 2,
      name: "siva",
      studid: 502,
      contact: "9454751265",
      class: "12th",
      mark: "82%"
    },
    {
      id: 3,
      name: "Ashok",
      studid: 505,
      contact: "9546125749",
      class: "12th",
      mark: "75%"
    },
    {
      id: 4,
      name: "Vani",
      studid: 515,
      contact: "9854654215",
      class: "12th",
      mark: "98%"
    },
    {
      id: 5,
      name: "sara",
      studid: 501,
      contact: "9554559421",
      class: "12th",
      mark: "69%"
    },
    {
      id: 6,
      name: "Gomu",
      studid: 525,
      contact: "9454557842",
      class: "12th",
      mark: "74%"
    }
  ]

  const addStud = (stud) => {
    stud.id = stud.length + 1;
    setStudent([...student, stud])
  }

  const [student, setStudent] = useState(InitialStudentDetails);
  const navigate = useNavigate()



  const [mode, setMode] = useState('light')

  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={themeCtx}>
      <Paper elevation={4}>
        <div className="App">
          <AppBar className='AppBar' position="static">
            <Toolbar>
              <h1 className='appbar-msicon'>MS</h1>
              <Button color="inherit" onClick={() => navigate('/')} >Home</Button>
              <Button color="inherit" onClick={() => navigate('/studtable')} >Student Details</Button>
              <Button color="inherit" onClick={() => navigate('/studentaddform')} >Add Student</Button>
              <Button
                sx={{
                  marginLeft: "auto",
                }}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark" : "light"} mode
              </Button>
              <Button color="inherit" ><AccountCircleIcon /></Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admindashboard' element={<AdminDash />} />
            <Route path='/studtable' element={<StudentTable student={student} />} />
            <Route path='/studlogin' element={<StudLogin />} />
            <Route path='/teacherlogin' element={<TeacherLogin />} />
            <Route path='/studsignup' element={<StudSignup />} />
            <Route path='/teachersignup' element={<TeacherSignup />} />
            <Route path='/studentaddform' element={<Studentaddform addStud={addStud} />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
