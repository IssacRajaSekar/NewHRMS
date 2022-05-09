import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Drawer, ListItemButton,List, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function DrawerMenu() {
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
                <Button variant='Text' onClick={()=>handleButtonClick('/allEmpAttendance')}>Attendance</Button>
            </ListItemButton>
            <ListItemButton>
                <Button variant='Text' onClick={()=>handleButtonClick('/allPendingLeaveApplication')}>Pending Leave Application</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/allLeaveApplicationStatus')}>Leave Application Status</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/employees_list')}>Employees List</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/add_employee')}>Add Employees</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/allPayslip')}>Payslip List</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/createPayslip')}>Create Payslip</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/documentsWallet')}>Documents Wallet List</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/createdocumentWallet')}>Create Document Wallet</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/allEmpAttendance')}>Organization</Button>
            </ListItemButton>
            <ListItemButton>
                    <Button variant='Text' onClick={()=>handleButtonClick('/forget_password')}>Change Password</Button>
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
