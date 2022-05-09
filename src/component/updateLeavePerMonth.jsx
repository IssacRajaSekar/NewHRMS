import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import { useLocation,useNavigate} from "react-router-dom";
import { useState } from "react";

export default function UpdateLeavePerMonth(){



    
    const navAfterUpdate = useNavigate();
    const {state} = useLocation();
    const [sickLeave,setSickLeave]=useState(state.sickLeave);
    const [casualLeave,setCasualLeave]=useState(state.casualLeave);
    console.log(state._id)
    const UpdateMonthlyLeave = async (e) => {
        e.preventDefault();
        const updateLeave ={sickLeave,casualLeave}
    console.log(updateLeave)
        let updateLeaveData = await fetch('http://192.168.0.112:9022/HRMS/leaveApplication/updateEmployeeMonthlyLeave/'+state._id,{
            method: 'PUT',
            headers: {
              'Content-type': 'application/JSON'
            },
            body: JSON.stringify(updateLeave)
            
        })
        // JSON.parse
        updateLeaveData = await updateLeaveData.json()
        navAfterUpdate('/organizationDetails')
    }
    return(
        <div className="Bg mb-5 ">
          {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
        <div class="container my-5 py-5">
        <form class="form-style text-align-center" action="">
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Sick Leave</label>
            <input class="col pe-5 me-5" type="text" name="sickLeave" id="sickLeave" value={sickLeave} onChange={(e)=>setSickLeave(e.target.value)} />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Casual Leave</label>
            <input class="col pe-5 me-5" type="text" name="casualLeave" id="casualLeave" value={casualLeave} onChange={(e)=>setCasualLeave(e.target.value)} />
        </div>
                <div className="d-grid m-4">
            <input type="button" onClick={UpdateMonthlyLeave} className="btn btn-lg btn-primary" value="Submit" />
        </div>
        </form>
        </div>
        </div>)
}