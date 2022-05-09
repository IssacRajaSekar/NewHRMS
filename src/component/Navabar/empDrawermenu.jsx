import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Drawer, ListItemButton,List, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function EmpDrawerMenu() {
    const navPage = useNavigate();
    const [drawer, setDrawer] = useState(false);
    const handleButtonClick = pageURL =>{
        navPage(pageURL)
    }

    function logout(){
            localStorage.clear();
            navPage('/')
            window.location.reload(false)
          }

  return (
    <React.Fragment>
        <Drawer open={drawer} variant='persistent' sx={{color:'white',marginLeft:'auto'}} onChange={(e,drawer)=>{setDrawer(drawer)}}>
        <List>
           <ListItemButton>
                <Button variant='Text' onClick={()=>handleButtonClick('/home')}>HOME</Button>
            </ListItemButton>
            <ListItemButton>
                <Button variant='Text' onClick={()=>handleButtonClick('/employee_profile')}>PROFILE</Button>
            </ListItemButton>
            <ListItemButton>
                <Button variant='Text' onClick={()=>handleButtonClick('/empAttendance')}>ATTENDANCE</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick("/leave_application")}>LEAVE APPLICATION</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick("/leaveApplicationStatus")}>LEAVE APPLICATION STATUS</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick("/empDocumentsWallet")}>DOCUMENT WALLET</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick("/employeePayslip")}>PAYSLIP</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick("/organizationDetails")}>ORGANIZATION</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick("/forget_password")}>PASSWORD RESET</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={logout}>Logout</Button>
            </ListItemButton>
        </List>  
            
        </Drawer>
        <IconButton onClick={()=>{setDrawer(!drawer)}}>
            <MenuIcon/>
        </IconButton>
        
    </React.Fragment>
  )
}