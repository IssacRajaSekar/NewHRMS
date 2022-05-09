// import AdminNavbar from '../adminNavbar';
// import React,{useState,useEffect} from "react";
// import axios from 'axios';
// import { useLocation,Link, useNavigate } from 'react-router-dom';

// export default function ViewEmployeeProfile() {
//     // const [employeeProfile,setEmployeeProfile] = useState({});
//     const {state}=useLocation();
//     console.log(state)
//     const id = state._id
//       function updateEmp(e,empProfile){
//           console.log(empProfile)
//         navToUpdate('/updateEmpProfile',{state:empProfile})
//       }
//     const navToUpdate = useNavigate()
//     return (
//     <div className="Bg">
//         <AdminNavbar/>
//         <div class="container row my-5 py-5">

//                     <img src={state.profileImage} class="img-thumbnail" alt="Profile Image" />
                   
//                     <h5 className=" m-2" >Name : {state.name}</h5> 
                
//                     <h5 className=" m-2" >Email-ID : {state.email}</h5> 
             
//                     <h5 className=" m-2" >Mobile Number : {state.contact}</h5> 
                
//                     <h5 className=" m-2" >Designation : {state.designation.designationName}</h5>  
               
//                     <h5 className=" m-2" >Identity Number : {state.identityNumber}</h5> 
                
//                     <h5 className=" m-2" >Gender : {state.gender}</h5> 
           
//                     <h5 className=" m-2" >Date Of Joining : {state.dateOfJoining}</h5> 
              
//                     <h5 className=" m-2" >Years Of Experrience : {state.yearsOfExperience}</h5> 
                
//                     <h5 className=" m-2" >Team Leader : {state.designation.teamLeader}</h5> 
              
//                     <h5 className=" m-2" >Project Manager : {state.designation.projectManager}</h5> 
               
//                     <h5 className=" m-2" >Date Of Birth : {state.dateOfBirth}</h5> 
                
//                     <h5 className=" m-2" >Blood Group : {state.bloodGroup}</h5> 
                
//                     <h5 className=" m-2" >Address : {state.address}</h5> 

//                     <img src={state.uploadDocument} class="img-thumbnail" alt="Document" />
               
                    

//                     <div>
//                         <Link to ="/deleteEmpProfile"><button className="btn-primary px-3 m-5" type="button">Delete</button></Link>
//                         <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>updateEmp(e,state)}>update</button>
//                     </div>
    
//         <div className="col"></div>
//         </div>
//     </div >

//     );
// }

import React,{useState,useEffect} from "react";
import axios from 'axios';
import AdminNavbar from '../Navabar/adminNavbar';
import EmpNavbar from '../Navabar/empNavbar';
import {useLocation,useNavigate } from 'react-router-dom';
import { Avatar } from "@mui/material";
import pLA from '../UI/Assets/EMPLOYEE/ADD_EMPLOYEE/addEmployee.jpg';


function ViewEmployeeProfile() {
    const [employeeData,setEmployeeData] = useState({});
    const {state}=useLocation();
    const token = localStorage.getItem('token');
     console.log(state)
     const id = state._id
    const employeeDetails = async () => {
        axios({
            'method':'GET',
            'url': 'http://192.168.0.112:9022/HRMS/employee/getSingleEmployee/'+ id,
            'headers':{
                'Authorization':token
            }
        })
        .then((response) => {
            console.log(response)
            setEmployeeData(response.data.message)
            console.log(employeeData)
        })
        .catch((error) => {
            console.log(error)
        }
        )
    }
    useEffect(() =>{employeeDetails();},[]);

            async function updateEmp(e,Profile){
                  console.log(Profile)
             navToUpdate('/updateEmpProfile',{state:Profile})
              }
            const navToUpdate = useNavigate()

            async function deleteEmp(e,Profile){
                console.log(Profile)
              navToDelete('/deleteEmpProfile',{state:Profile})
            }
          const navToDelete = useNavigate()

    return (
        <div>
        {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
     <div className="homeFlex">
     <img src={pLA} alt="" />
     <div className='row'>
      <div className="Bg card col-12">
          <h3 className='bg-black text-white' style={{marginTop:'200px',marginBottom:'20px',paddingRight:'400px',paddingLeft:'400px'}}>EMPLOYEE PROFILE</h3>
      <div class="container background">
      <form class="ps-5 pe-4 form-style text-align-center ">
        {employeeData.length == 0 ? <h5> No Data Found </h5>:
        employeeData!=null&& employeeData &&
         <><div className="row">
                    <Avatar src={employeeData.profileImage} className="col pe-5 me-5" width='100px' alt="Profile Image" />
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Name :</label>
                <label className="col-6">{employeeData.name}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Email-ID :</label>
                <label className="col-6">{employeeData.email}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Mobile Number :</label>
                <label className="col-6">{employeeData.contact}</label> 
                </div>
                {employeeData.designation && <><div className='row pe-1 pt-1 pb-1 mb-5 mt-3'><label className="col-6">Designation :</label>
                <label className="col-6"> {employeeData.designation.designationName}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Team Leader :</label>
                <label className="col-6">{employeeData.designation.teamLeader}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Project Manager :</label> 
                <label className="col-6">{employeeData.designation.projectManager}</label> </div></>}
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Identity Number :</label>
                <label className="col-6">{employeeData.identityNumber}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Gender :</label>
                <label className="col-6">{employeeData.gender}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Date Of Joining :</label>
                <label className="col-6">{employeeData.dateOfJoining}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Years Of Experrience :</label>
                <label className="col-6">{employeeData.yearsOfExperience}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Date Of Birth :</label>
                <label className="col-6"> {employeeData.dateOfBirth}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Blood Group :</label>
                <label className="col-6"> {employeeData.bloodGroup}</label> 
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Address :</label>
                <label className="col-6">{employeeData.address}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                    <iframe src={employeeData.uploadDocument} className="col-3" width="20%" height="200px"/>
                </div>
                    {/* <img src={employeeData.uploadDocument} className="img-fluid col-2 m-2" alt="Profile Image" /> */}
                    {employeeData.bankDetails && <><div className='row pe-1 pt-1 pb-1 mb-5 mt-3'> <label className="col-6">Account Holder Name:</label> 
                    <label className="col-6">{employeeData.bankDetails.accountHolderName}</label></div>
                 <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                 <label className="col-6">Account Number:</label> 
                 
                 <label className="col-6">{employeeData.bankDetails.accountNumber}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">IFSC Code:</label>
                <label className="col-6">{employeeData.bankDetails.IFSCCode}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Branch Name:</label>
                <label className="col-6">{employeeData.bankDetails.branchName}</label>
                </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <h3 className="col-6 bg-black color-white fw-bolder">ESI AND PF DETAILS</h3>
                    </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">PAN Number:</label><label className="col-6"> {employeeData.bankDetails.panNumber}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">ESI Number:</label> <label className="col-6">{employeeData.bankDetails.esiNumber}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">UAN Number:</label><label className="col-6"> {employeeData.bankDetails.uanNumber}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">PF Number:</label><label className="col-6"> {employeeData.bankDetails.pfNumber}</label></div></>}

                    {/* <h3 className="m-2 my-5">Payslip Details</h3>

                    <h5 className="m-2">Basic Pay: {employeeData.payslipDetails.basicPay}</h5>

                    <h5 className="m-2">HRA: {employeeData.payslipDetails.HRA}</h5>

                    <h5 className="m-2">Medical Allowance: {employeeData.payslipDetails.medicalAllowance}</h5>

                    <h5 className="m-2">Conveyance Allowance: {employeeData.payslipDetails.conveyanceAllowance}</h5>

                    <h5 className="m-2">City compensatory Allowance: {employeeData.payslipDetails.cityCompensatory}</h5>

                    <h5 className="m-2">Other Allowance: {employeeData.payslipDetails.otherAllowance}</h5>

                    <h5 className="m-2">Employee Share Of ESI: {employeeData.payslipDetails.employeeShareOfESI}</h5>

                    <h5 className="m-2">Employer Share Of ESI: {employeeData.payslipDetails.employerShareOfESI}</h5>

                    <h5 className="m-2">Employee Share Of PF: {employeeData.payslipDetails.employeeShareOfPF}</h5>

                    <h5 className="m-2">Employer Share Of PF: {employeeData.payslipDetails.employerShareOfPF}</h5>

                    <h5 className="m-2">TDS: {employeeData.payslipDetails.TDS}</h5> */}
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className="col-6">Modify at:</label><label className="col-6"> {employeeData.modifyDate}</label>
                </div>
                <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>

                <label className="col-6">Created at:</label><label className="col-6"> {employeeData.createdAt}</label>
                </div>
                    <div>
                    <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>updateEmp(e,employeeData)}>Update</button>
                    <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>deleteEmp(e,employeeData)}>Delete</button> 
                    </div>
                    </div>
        </>
    }
    
        </form>
    
   
    </div>
    
    </div>
    </div>
    </div>
    
    </div>
    

    );
}

export default ViewEmployeeProfile;