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
import ProfileMenu from './smallMenu';
import user from '../UI/Assets/LOGIN_&_HOMEPAGE/user.png';

export default function SmallMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navPage = useNavigate();
  let uName = localStorage.getItem('companyName')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logout(){
    localStorage.clear();
    navPage('/')
    window.location.reload(false)
  }

  return (
    <React.Fragment >
      <Box style={{marginLeft:'auto'}} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={user} sx={{ width: 32, height: 32 }}></Avatar><Typography sx={{paddingLeft:'10px'}}>{uName}</Typography><img src={down} alt='down' width='20px' className='ms-2'/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className='dd'>
        <MenuItem>
          <Avatar /><Link style={{color:'black',textDecoration:'none',marginLeft:'10px'}} to='/organizationDetails'>ORGANIZATION</Link>
        </MenuItem>
        </div>
        <div className='dd'>
        <MenuItem>
          <PasswordIcon/><Link style={{color:'black',textDecoration:'none',marginLeft:'20px'}} to='/forget_password'>RESET PASSWORD</Link>
        </MenuItem>
        <Divider />
        </div>
        <div className='dd'>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Button variant='Text' onClick={logout}>Logout</Button>
        </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
}
