import React,{useState,useEffect} from "react";
import axios from 'axios';
import AdminNavbar from '../Navabar/adminNavbar';
import EmpNavbar from '../Navabar/empNavbar';
import { useNavigate } from "react-router-dom";
import pLA from '../UI/Assets/EMPLOYEE/ADD_EMPLOYEE/addEmployee.jpg';
import { Avatar } from "@mui/material";

function EmployeeProfile() {
    const [employeeData,setEmployeeData] = useState({});
    const id = localStorage.getItem('ID')
    const employeeDetails = async () => {
        axios({
            'method':'GET',
            'url': 'http://192.168.0.112:9022/HRMS/employee/getSingleEmployee/'+ id,
        }) 
        .then((response) => {
            console.log(response.data.message)
            setEmployeeData(response.data.message)
        })
        .catch((error) => {
            console.log(error)
        }
        )
    }
    useEffect(() =>{employeeDetails();},[]);

    async function Payslip(e,payslip){
        console.log(payslip)
   navToUpdate('/employeePayslip')
    }
  const navToUpdate = useNavigate()

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
        employeeData &&
         <>
                <Avatar class="col pe-5 me-5" src={employeeData.profileImage}></Avatar>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Name :</label>
                <label className='col-6'>{employeeData.name}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Email-ID :</label>
                <label className='col-6'>{employeeData.email}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Mobile Number :</label>
                <label className='col-6'>{employeeData.contact}</label>
        </div>
        <div cclassName='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Identity Number :</label>
                <label className='col-6'>{employeeData.identityNumber}</label>
        </div>
        {employeeData.designation && <><div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Designation :</label>
                <label className='col-6'>{employeeData.designation.designationName}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Team Leader :</label>
                <label className='col-6'>{employeeData.designation.teamLeader}</label>
        </div> 
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Project Manager :</label>
                <label className='col-6'>{employeeData.designation.projectManager}</label>
        </div></>}
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Gender :</label>
                <label className='col-6'>{employeeData.gender}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Date Of Joining :</label>
                <label className='col-6'> {employeeData.dateOfJoining}</label>
        </div>  
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Years Of Experrience :</label>
                <label className='col-6'> {employeeData.yearsOfExperience}</label>
        </div> 
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Date Of Birth :</label>
                <label className='col-6'>{employeeData.dateOfBirth}</label>
        </div> 
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Blood Group :</label>
                <label className='col-6'>{employeeData.bloodGroup}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Blood Group :</label>
                <label className='col-6'>{employeeData.bloodGroup}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Address :</label>
                <label className='col-6'>{employeeData.address}</label>
        </div>
        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
                <label className='col-6' for="identityNumber">Resume </label>
                <iframe className='col-6'>{employeeData.uploadDocument}</iframe>
        </div>

        <div className='row pe-1 pt-1 pb-1 mb-5 mt-3'>
            <input type="button" onClick={Payslip} className=" mx-1 px-1 btn btn-light innerShadow border-1 py-2 my-4 no-borderRadiusImportant" value="Payslip" />
        </div>
        </>
    }
        <div className="col"></div>
        </form>
        </div>
    </div >
    </div>
    </div >
    </div>

    );
}

export default EmployeeProfile;