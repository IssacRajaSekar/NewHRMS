import axios from "axios";
import React from "react";
import {useNavigate,useLocation} from "react-router-dom";
import AdminNavbar from '../Navabar/adminNavbar';
import EmpNavbar from '../Navabar/empNavbar';

export default function DeleteEmpProfile() {
    const {state}=useLocation();
    console.log(state)
    const id = state._id
    console.log(id)
    const navigateto = useNavigate()
    function navigateback(){
    navigateto('/employees_list')
    }
    const navigateToEmpList = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token)
    const deleteemployee = () =>{
     axios({
            'method':'delete',
            'url':'http://192.168.0.112:9022/HRMS/employee/deleteEmployee/'+id,
            headers:{
                'Authorization':token
            }
        }).then((response) => {
            console.log(response)
            navigateToEmpList('/employees_List')
            })
        .catch((error)=>{
            console.log(error)
        })
    }
  
    return(
        <div className='container'>
            <div className="mb-5 pb-5">   {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}</div>
            <div className="card mt-5 m-5 p-5 background">
            <h5>Are you sure you want to delete <strong>{state.name}</strong> details?</h5>
            <div>
                <button onClick={deleteemployee} className="px-3 m-5">Yes</button>
                <button onClick={navigateback} className="px-3 m-5">No</button>
            </div>
            </div>
        </div>
    );
}
