import Home from './Home';
import './App.css';
import { useState } from 'react';
import StudentTable from './studenttable';
import { TeacherLogin } from './Login';
import { AppBar, Button, createTheme, Paper, ThemeProvider, Toolbar } from '@mui/material';
import StudLogin from './Login';
import Teachers from './Teachers/teachers';
import { EditTeacherForm } from './Teachers/TeachersForm';
import { TeachersAddForm } from './Teachers/TeachersForm';
import { StudSignup, TeacherSignup } from './signup'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Studentaddform from './studentform';
import { AdminDash } from './AdminDash';
import EditStudentForm from './EditStudentFrom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function App() {

  // Student Operations

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

  // adding students
  const addStud = (stud) => {
    stud.id = stud.length + 1;
    setStudent([...student, stud])
    setStudediting(true)
  }

  // deleting students
  const deleteUser = (id) => {
    setStudent(student.filter((stud) => stud.id !== id))
  }


  const initialFormState = { id: null, name: '', studid: '', contact: '', class: '', mark: '' }
  const [student, setStudent] = useState(InitialStudentDetails);
  const [studediting, setStudediting] = useState(false);
  const navigate = useNavigate()
  const [currentStud, setCurrentstud] = useState(initialFormState)

  // editing students
  const editStudent = (stud) => {
    setStudediting(true);
    setCurrentstud({ id: stud.id, name: stud.name, studid: stud.studid, contact: stud.contact, class: stud.class, mark: stud.mark })
  }

  // updating students
  const updateStud = (id, updatedStud) => {
    setStudediting(false);
    setStudent(student.map((stud) => (stud.id === id ? updatedStud : stud)))
  }


  //Teachers operations
  const TeachersData = [
    {
      id: 1,
      name: "gunasekar",
      experience: "4 years",
      subject: "Tamil",
      salary: "25,000",
      contact: "9658754213",
    },
    {
      id: 2,
      name: "Vimala",
      experience: "7 years",
      subject: "Science",
      salary: "38,000",
      contact: "9654254252",
    },
    {
      id: 3,
      name: "Vinoth",
      experience: "3 years",
      subject: "History",
      salary: "22,000",
      contact: "9658748131",
    },
    {
      id: 4,
      name: "Vinutha",
      experience: "8 years",
      subject: "English",
      salary: "42,000",
      contact: "9548742215",
    },
    {
      id: 5,
      name: "Arun",
      experience: "5 years",
      subject: "Maths",
      salary: "28,000",
      contact: "9546758184",
    }
  ]

  // adding Teachers
  const addTeacher = (teach) => {
    teach.id = teach.length + 1;
    setTeacher([...teacher, teach]);
    setTeachEditing(true)
  }

  const initialteacherFormState = { id: null, name: '', experience: '', subject: '', salary: '', contact: '' }
  const [teacher, setTeacher] = useState(TeachersData)
  const [teachediting, setTeachEditing] = useState(false);
  const [currentTeach, setCurrentTeach] = useState(initialteacherFormState)

  // deleting Teachers
  const DeleteTeacher = (id) => {
    setTeacher(teacher.filter((teach) => teach.id !== id))
  }

  //Editing Teachers details
  const editTeacher = (teach) => {
    setTeachEditing(true);
    setCurrentTeach({
      id: null,
      name: teach.name,
      experience: teach.experience,
      subject: teach.subject,
      salary: teach.salary,
      contact: teach.contact
    })
  }

  //updating Teachers Details
  const updateTeacher = (id, updatedTeacher) => {
    setTeachEditing(false);
    setTeacher(teacher.map((teach) => (teach.id === id ? updatedTeacher : teach)))
  }

  //Applying theme
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
              <Button color="inherit" className='appbar-msicon' onClick={() => navigate('/')} >MS School Management</Button>
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
            <Route path='/studlogin' element={<StudLogin />} />
            <Route path='/teacherlogin' element={<TeacherLogin />} />
            <Route path='/studsignup' element={<StudSignup />} />
            <Route path='/teachersignup' element={<TeacherSignup />} />
            <Route path='/teachers' element={<Teachers teacher={teacher} DeleteTeacher={DeleteTeacher} editTeacher={editTeacher} />} />
            <Route path='/teachersaddform' element={<TeachersAddForm addTeacher={addTeacher} />} />
            <Route path='/teachereditform' element={<EditTeacherForm
              updateTeacher={updateTeacher}
              setTeachEditing={setTeachEditing}
              currentTeach={currentTeach} />}
            />
            <Route path='/editstudform' element={<EditStudentForm
              updateStud={updateStud}
              setStudediting={setStudediting}
              currentStud={currentStud} />}
            />
            <Route path='/studentaddform' element={<Studentaddform addStud={addStud} />} />
            <Route path='/admindashboard' element={<AdminDash />} />
            <Route path='/studtable' element={<StudentTable deleteUser={deleteUser} editStudent={editStudent} student={student} />} />
          </Routes>

          <Paper className='footer-container' >
            <div className='footer'>
              <p className='footer-icons'><FacebookIcon /> Facebook</p>
              <p className='footer-icons'><GitHubIcon /> GitHub</p>
              <p className='footer-icons'><InstagramIcon /> Instagram</p></div>
            <p>Copyrights suresh-2023.All rights reserved. Designed by Suresh</p>
          </Paper>

        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
