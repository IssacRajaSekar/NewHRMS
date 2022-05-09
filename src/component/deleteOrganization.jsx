import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function DeleteOrganization() {
    const navigateto = useNavigate()
    // navigateto('/organizationDetails')
    const id = localStorage.getItem('ID')
    console.log(id)

    const deleteOrganization = () =>{
        axios({
            'method':'delete',
            'url':'http://192.168.0.112:9022/HRMS/organization/deleteOrganization/'+id
        }).then((response)=>{
            console.log(response)
            navigateto('/organization')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className='container'>
            <div className="mb-5">  {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}</div>
            <div className="card mt-5 m-5 p-5 background">
            <h5>Are you sure you want to delete organization details?</h5>
            <div>
                <button onClick={deleteOrganization} className="px-3 m-5">Yes</button>
                <button onClick={navigateto} className="px-3 m-5">No</button>
            </div>
            </div>
        </div>
    );
}

