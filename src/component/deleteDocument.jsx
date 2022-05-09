import axios from "axios";
import React from "react";
import {useNavigate,useLocation} from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function DeleteDocumenWallet(){
    const {state}=useLocation();
    console.log(state)
    const navigateToDoc = useNavigate()

    function navigateback(){
    navigateToDoc('/documentsWallet')
    }

    const navigateTo = useNavigate()

    const deleteDocument = () =>{
     axios({
            'method':'delete',
            'url':'http://192.168.0.112:9022/HRMS/documentwallet/deleteDocumentWallet/'+state._id,
        }).then((response) => {
            console.log(response)
            navigateTo('/documentsWallet')
            })
        .catch((error)=>{
            console.log(error)
        })
    }
  
    return(
        <div>
            <div className='container'>
            <div className="mb-5 pb-5">   {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}</div>
            <div className="background mt-5 m-5 p-5">
            <h5>Are you sure you want to delete below documents?</h5> 
            {state.certificate.length>0 && state.certificate.map((y)=>
            <>
            <iframe src={y} className="col-3 m-3" width="20%" height="200px"/>

            </>
            )}

            <div>
                <button onClick={deleteDocument} className="px-3 m-5">Yes</button>
                <button onClick={navigateback} className="px-3 m-5">No</button>
            </div>
            </div>
        </div>
        </div>
    );
}