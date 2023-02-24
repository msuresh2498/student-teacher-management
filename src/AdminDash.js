import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button, Card, CardContent, List, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import Groups3Icon from '@mui/icons-material/Groups3';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Collections } from '@mui/icons-material';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export const AdminDash = () => {
  const data = [
    {
      name: "Jun",
      feescollections: "350000",
      totalcollections: "550000"
    },
    {
      name: "July",
      feescollections: "280000",
      totalcollections: "350000"
    },
    {
      name: "Aug",
      feescollections: "300000",
      totalcollections: "450000"
    },
    {
      name: "Sep",
      feescollections: "360000",
      totalcollections: "570000"
    },
    {
      name: "Oct",
      feescollections: "250000",
      totalcollections: "450000"
    },
    {
      name: "Nov",
      feescollections: "320000",
      totalcollections: "540000"
    },
    {
      name: "Dec",
      feescollections: "250000",
      totalcollections: "420000"
    }, {
      name: "Jan",
      feescollections: "350000",
      totalcollections: "580000"
    }
  ]
  return (
    <div className="AdminPage">
      <div className="Sidebar">
        <img src='https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png' alt='admin-icon' className='admin-icon' />
        <List className='sidebar-list'>
          <Button className='list-item'>
            <DashboardIcon /> Dashboard
          </Button>
          <Button className='list-item'>
            <PermIdentityIcon /> Teachers
          </Button>
          <Button className='list-item'>
            <SchoolIcon /> Students
          </Button>
          <Button className='list-item'>
            <SupervisorAccountIcon /> Admission
          </Button>
          <Button className='list-item'>
            <LibraryBooksIcon /> Attendence
          </Button>
        </List>
        <h2 className='admin-logout'><LogoutIcon />Logout</h2>
      </div>



      <div className="main-Dashboard">
        <h1 className='dash-heading'>Admin Dashboard</h1>
        <div className='admin-cards'>
          <Card className='admin-card-items' >
            <CardContent>
              <Typography className='admin-typography'>
                <GroupsIcon className='admin-card-icon1' />
                <div>
                  <p className='admin-card-text'>Total Students </p>
                  <h2 className='admin-card-subtext'>1200</h2></div>
              </Typography>
            </CardContent>
          </Card>
          <Card className='admin-card-items'>
            <CardContent>
              <Typography className='admin-typography'>
                <Groups3Icon className='admin-card-icon2' />
                <div>
                  <p className='admin-card-text'>Total Teachers</p>
                  <h2 className='admin-card-subtext'>29</h2></div>
              </Typography>
            </CardContent>
          </Card>
          <Card className='admin-card-items'>
            <CardContent>
              <Typography className='admin-typography'>
                <LibraryBooksIcon className='admin-card-icon3' />
                <div>
                  <p className='admin-card-text'>Student Attendence</p>
                  <h2 className='admin-card-subtext'>79%</h2></div>
              </Typography>
            </CardContent>
          </Card>
          <Card className='admin-card-items'>
            <CardContent>
              <Typography className='admin-typography'>
                <PlaylistAddCheckIcon className='admin-card-icon4' />
                <div>
                  <p className='admin-card-text'>Task Completion</p>
                  <h2 className='admin-card-subtext'>75%</h2></div>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className='admin-chart'>
            <Typography>
              <h3 className='chart-heading'>Earnings</h3>
              <div className='chart-subhead'>
                <p className='chart-sub-head'>Total Collections<h3 className='chart-amt-head'>80,000₹</h3></p>
                <p className='chart-sub-head'>Fees Collections<h3 className='chart-amt-head'>20,000₹</h3></p>
              </div>
            </Typography>
            <BarChart width={750} height={350} data={data}>
              <CartesianGrid strokeDasharray="0 1000" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="feescollections" fill="#8884d8" />
              <Bar dataKey="totalcollections" fill="#82ca9d" />
            </BarChart>
          </Card>
        </div>
      </div>
    </div>
  );
};
