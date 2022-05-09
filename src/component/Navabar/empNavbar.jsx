import "../../App";
import {Link, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import bee from "../UI/Assets/LOGIN_&_HOMEPAGE/bee.png";
import { AppBar, Tabs, Toolbar,Typography,useTheme,useMediaQuery,Avatar,Button,Menu,MenuItem,IconButton,Badge,Box,Tooltip,Divider,ListItemIcon} from '@mui/material';
import React from "react";
import logo from '../UI/Assets/LOGIN_&_HOMEPAGE/bee.png';
import EmpSmallMenu from './empSmallMenu';
import EmpDrawerMenu from "./empDrawermenu";

function EmpNavbar() {
  let uName = localStorage.getItem('userName')
  const navigate = useNavigate()
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('xl'));
  function logout(){
    localStorage.clear();
    navigate('/')
    window.location.reload(false)
  }
    return (
//         <div className="bgn tc fixed-top">
//             <nav className="navbar navbar-expand-lg navbar-light">
//   <div className="container-fluid">
//   <img src={bee} width='100px' height='100px' className='px-2 mx-2'/>
//     <div className="collapse navbar-collapse row" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-10">
//         <li className="nav-item">
//           <Link to="/employee_profile" className="nav-link active" aria-current="page">Profile</Link>
//         </li>
  
//         <li className="nav-item">
//           <Link to="/empAttendance" className="nav-link active" aria-current="page">Attendance</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/leave_application" className="nav-link active" aria-current="page">Leave Application</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/leaveApplicationStatus" className="nav-link active">Leave Application Status</Link>
//         </li> 
        
//         <li className="nav-item">
//           <Link to="/documentsWallet" className="nav-link active" aria-current="page">Documents Wallet</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/employeePayslip" className="nav-link active" aria-current="page">Payslip</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/organizationDetails" className="nav-link active" aria-current="page">Organization Details</Link>
//         </li>
        
//       </ul>
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-1">
//       <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            {uName}
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><Link to="/forget_password" className="nav-link dropdown-item">Password Reset</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><button onClick={logout} className="nav-link dropdown-item">Log Out</button></li>
//           </ul>
//         </li>
//       </ul>
//       <div className="col-1"></div>
//     </div>
//   </div>
// </nav>
// <div>
// </div>
//         </div>
<React.Fragment>
     <AppBar elevation={0} sx={{background:'white'}}>
       <Toolbar>
        <div className='appBarLogo me-5 pe-5'>
            <Avatar src={logo} alt="logo" className='logo'/>
            <Typography className='hrmsTag fw-bolder' style={{color:'#404040',fontSize:'25px'}}>HRMS</Typography>
        </div>
          {isMatch?
          (<>
          <EmpDrawerMenu/>
          </>)
          :(<>
      <Tabs sx={{textColor:'black'}}>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/home'>HOME</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/empAttendance'>ATTENDANCE</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'30px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/leave_application'>LEAVE APPLICATION</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/leaveApplicationStatus'>LEAVE APPLICATION STATUS</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/empDocumentWallet'>DOCUMENT WALLET</Link>
          <Link style={{color:'black',textDecoration:'none',marginRight:'50px',paddingTop:'5px',fontWeight:'500'}} className='fw-bold mt-2' to='/employeePayslip'>PAYSLIP</Link> 
    </Tabs>
    <EmpSmallMenu/>
    
          </>)}
       </Toolbar>
     </AppBar>
   </React.Fragment>
      ); 
    } 

export default EmpNavbar;