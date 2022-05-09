// import '../App';
// import bee from "../assets/images/1000X1000_bee_logo.png";
// import {Link, useNavigate} from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import React,{useState, useEffect} from "react";


// function AdminNavbar() {
//   const [pendingLeaveDetailsCount, setPendingLeaveDetailsCount] = useState();
//     // const [acceptMsg, setAcceptMsg] = useState();
//     // const [rejectMsg, setRejectMsg] = useState();
//     const token = localStorage.getItem('token');
//     // const id = localStorage.getItem('ID');
//     console.log(token)
//     const pendingLeaveDetails = async () => {
//      axios({
//             'method':'GET',
//             'url':'http://192.168.0.112:9022/HRMS/leaveApplication/pendingLeaveDetailsCount'
//         }).then((response) => {
//           console.log(response)
//           console.log(response.data.leavePendingCount)
//           let res = response.data.leavePendingCount
//           console.log(res)
//           setPendingLeaveDetailsCount(res)
//           console.log(pendingLeaveDetailsCount)
//         })
//         .catch((error) =>{
//             console.log(error)
//         })
//     }

//     useEffect(() => {pendingLeaveDetails();},[]);

//   const navigate = useNavigate()
//   let uName = localStorage.getItem('companyName')
//   console.log(uName)
//   function logout(){
//     localStorage.clear();
//     navigate('/')
//     window.location.reload(false)
//   }
//     return (
//         <div className="bgn tc fixed-top">
//     <nav className="navbar navbar-expand-lg navbar-light">
//   <div className="container-fluid ">
//     <img src={bee} width='100px' height='100px' className='px-2 mx-2'/>
//     <div className="collapse navbar-collapse row" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-10">
//         {/* <li className="nav-item">
//           <Link to="/employee_profile" className="nav-link active" aria-current="page">Profile</Link>
//         </li> */}
//         <li className="nav-item">
//           <Link to="/allEmpAttendance" className="nav-link active" aria-current="page">Attendance</Link>
//         </li>
//         {/* <li className="nav-item">
//           <Link to="/empCalendar" className="nav-link active" aria-current="page">Emp.Calendar</Link>
//         </li>
//         <li className="nav-item"> */}
//           {/* <Link to="/leave_application" className="nav-link active" aria-current="page">Leave Application</Link>
//         </li> */}
//         <li className="nav-item">
//         <li><Link to='/allPendingLeaveApplication' className="nav-link active">Pending Leave Application:{<strong>({pendingLeaveDetailsCount})</strong>}</Link></li>
//         </li>
//         <li className="nav-item">
//           <Link to='/allLeaveApplicationStatus' className="nav-link active" aria-current="page">Leave Application status</Link>
//         </li>
//         {/* <li className="nav-item">
//           <Link to="/organizationDetails" className="nav-link active" aria-current="page">Organization Details</Link>
//         </li> */}
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Employees
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><Link to="/add_employee" className="nav-link dropdown-item">Add Employee</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/employees_list" className="nav-link dropdown-item">Employee List</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/createdocumentWallet" className="nav-link dropdown-item">Create Document Wallet</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/documentsWallet" className="nav-link dropdown-item">Documents Wallet</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/createPayslip" className="nav-link dropdown-item">Create Payslip</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/allPayslip" className="nav-link dropdown-item">Payslip</Link></li>
//              {/* <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/payslipGeneration" className="nav-link dropdown-item">All Month Payslip</Link></li> */}
//           </ul>
//         </li>
//         <li class="nav-item">
//           <Link to="/organizationDetails" class="nav-link active" aria-current="page">Organization Details</Link>
//         </li>
//         {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-1">
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Document Wallet
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><Link to="/createdocumentWallet" className="nav-link dropdown-item">Create Document Wallet</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/documentsWallet" className="nav-link dropdown-item">Documents Wallet</Link></li>
//           </ul>
//         </li>
//         </ul>
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-1">
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Payslip
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><Link to="/createPayslip" className="nav-link dropdown-item">Create Payslip</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/allPayslip" className="nav-link dropdown-item">Payslip</Link></li>
//             {/* <li><hr className="dropdown-divider"/></li>
//             <li><Link to="/payslipGeneration" className="nav-link dropdown-item">All Month Payslip</Link></li> */}
//           {/* </ul>
//         </li>
//         </ul> */}
//       </ul> 
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-1">
//       <li class="col-2 nav-item dropdown">
//           <a class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             {uName}
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><Link to="/forget_password" class="nav-link dropdown-item">Password Reset</Link></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><button onClick={logout} class="nav-link dropdown-item">Log Out</button></li>
//           </ul>
//         </li>
//         </ul>
//         <div className="col-1"></div>
//     </div>
//   </div>
// </nav>
// <div>

// </div>

//         </div>
//       ); 
//     } 

// export default AdminNavbar;

import React, { useState,useEffect } from 'react';
import { AppBar, Tabs, Toolbar,Typography,useTheme,useMediaQuery,Avatar,Button,Menu,MenuItem,IconButton,Badge,Box,Tooltip,Divider,ListItemIcon} from '@mui/material';
import logo from '../UI/Assets/LOGIN_&_HOMEPAGE/bee.png';
import { grey } from '@mui/material/colors';
import { sizeHeight } from '@mui/system';
import DrawerMenu from './drawer';
import AllPendingLeaveApplicationList from '../allPendingLeaveApplication';
import AllEmpAttendance from '../allEmpAttendance';
import LeaveApplicationStatus from '../leaveApplicationStatus';
import { Link, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import down from '../UI/Assets/LOGIN_&_HOMEPAGE/down.png';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import PasswordIcon from '@mui/icons-material/Password';
import SmallMenu from './smallMenu';


const AdminNavbar = () => {
  const navPage = useNavigate();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('xl'));
  console.log(isMatch)
  const [pendingLeaveDetailsCount, setPendingLeaveDetailsCount] = useState();
  const handleButtonClick = pageURL =>{
    navPage(pageURL)
}

const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pendingLeaveDetails = async () => {
         axios({
                'method':'GET',
                'url':'http://192.168.0.112:9022/HRMS/leaveApplication/pendingLeaveDetailsCount'
            }).then((response) => {
              console.log(response)
              console.log(response.data.leavePendingCount)
              let res = response.data.leavePendingCount
              console.log(res)
              setPendingLeaveDetailsCount(res)
              console.log(pendingLeaveDetailsCount)
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    
        useEffect(() => {pendingLeaveDetails();},[]);
  
  return (
   <React.Fragment>
     <AppBar elevation={0} sx={{background:'white'}}>
       <Toolbar>
        <div className='appBarLogo me-5 pe-5'>
            <Avatar src={logo} alt="logo" className='logo'/>
            <Typography className='hrmsTag fw-bolder' style={{color:'#404040',fontSize:'25px'}}>HRMS</Typography>
        </div>
          {isMatch?
          (<>
          <DrawerMenu/>
          </>)
          :(<>
          <Tabs sx={{textColor:'black'}}>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/home'>HOME</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/AllEmpAttendance'>ATTENDANCE</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'30px',paddingTop:'2px',fontWeight:'500'}} className='fw-bold' to='/allPendingLeaveApplication'>PENDING LEAVE APPLICATION
           <IconButton
              size="large"
              color='warning'
            >
              <Badge badgeContent={pendingLeaveDetailsCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/allLeaveApplicationStatus'>LEAVE APPLICATION STATUS</Link>
        
      <Button style={{color:'black',fontSize:'16px',paddingTop:'8px'}} sx={{paddingTop:'0px',marginTop:'0px'}} className='fw-bold'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        placement="bottom-start"
      >
        EMPLOYEES
        <img src={down} alt='down' width='20px' className='ms-2'/>
      </Button>
      <Menu style={{paddingTop:'0px',marginTop:'0px',paddingBottom:'0px',marginBottom:'0px'}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='dd'>
        <MenuItem onClick={handleClose} ><Link style={{color:'black',textDecoration:'none',paddingRight:'95px',marginLeft:'0px',marginRight:'0px'}} to='/employees_list'>EMPLOYEES LIST</Link></MenuItem>
        </div>
        <div className='dd'>
        <MenuItem onClick={handleClose} ><Link style={{color:'black',textDecoration:'none',paddingRight:'100px',marginLeft:'0px',marginRight:'0px'}} to='/add_employee'>ADD EMPLOYEE</Link></MenuItem>
        </div>
        <div className='dd'>
        <MenuItem onClick={handleClose} ><Link style={{color:'black',textDecoration:'none',paddingRight:'120px',marginLeft:'0px',marginRight:'0px'}} to='/allPayslip'>PAYSLIP LIST</Link></MenuItem>
        </div>
        <div className='dd'>
        <MenuItem onClick={handleClose} ><Link style={{color:'black',textDecoration:'none',paddingRight:'95px',marginLeft:'0px',marginRight:'0px'}} to='/createPayslip'>CREATE PAYSLIP</Link></MenuItem>
        </div>
        <div className='dd'>
        <MenuItem onClick={handleClose} ><Link style={{color:'black',textDecoration:'none',paddingRight:'30px'}} to='/documentsWallet'>DOCUMENT WALLET LIST</Link></MenuItem>
        </div>
        <div className='dd'>
        <MenuItem onClick={handleClose} ><Link style={{color:'black',textDecoration:'none',paddingRight:'5px'}} to='/createdocumentWallet'>CREATE DOCUMENT WALLET</Link></MenuItem>
       </div>
      </Menu>
    </Tabs>
    <SmallMenu/>
    
          </>)}
       </Toolbar>
     </AppBar>
   </React.Fragment>
  )
}

export default AdminNavbar;
