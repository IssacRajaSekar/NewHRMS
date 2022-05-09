import AdminNavbar from "../Navabar/adminNavbar";
import EmpNavbar from "../Navabar/empNavbar";
import '../home/home.css';
import SwipeableTextMobileStepper from "../carosuel/carosuel";
import { StyledEngineProvider } from '@mui/material/styles';
import bee from '../UI/Assets//LOGIN_&_HOMEPAGE/bee.png'

export default function Home(){
    return(
    <div>
{localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
<div className="homeFlex">
<div>
    <img src={bee} alt="Firebee Logo" width={300} className='me-4 p-4 logoAdj' />
    <h1 className="fw-bolder ms-5 height: 100px" style={{'font-size':'120px'}}>HRMS</h1>
</div>
<div>
<StyledEngineProvider injectFirst>
<SwipeableTextMobileStepper/>
</StyledEngineProvider>
</div>
</div>
</div>
);
}
