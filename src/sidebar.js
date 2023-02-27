import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SchoolIcon from '@mui/icons-material/School';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button,List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const Sidebar=()=> {
    const navigate =useNavigate();
    return <div className="Sidebar">
      <img src='https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png' alt='admin-icon' className='admin-icon' />
      <List className='sidebar-list'>
        <Button className='list-item' onClick={() => navigate('/admindashboard')}>
          <DashboardIcon /> Dashboard
        </Button>
        <Button className='list-item' onClick={() => navigate('/teachers')}>
          <PermIdentityIcon /> Teachers
        </Button>
        <Button className='list-item' onClick={() => navigate('/studtable')}>
          <SchoolIcon /> Students
        </Button>
        <Button className='list-item' onClick={() => navigate('/studentaddform')}>
          <SupervisorAccountIcon /> Admission
        </Button>
        <Button className='list-item'>
          <LibraryBooksIcon /> Attendence
        </Button>
      </List>
      <Button className='list-item-logout' onClick={() => navigate('/')}><LogoutIcon />Logout</Button>
    </div>;
  }

  export default Sidebar