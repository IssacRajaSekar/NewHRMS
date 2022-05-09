import React,{useEffect, useState} from "react";
import {useNavigate } from "react-router-dom";
import AdminNavbar from '../Navabar/adminNavbar';
import EmpNavbar from '../Navabar/empNavbar';
import axios from "axios";
import '../../App.css'
import pLA from '../UI/Assets/EMPLOYEE/ADD_EMPLOYEE/addEmployee.jpg';

export default function AddEmployee() {
const [email,setEmail]=useState();
const [contact,setMobNumber]=useState();
const [password,setPassword]=useState();
const [name,setName]=useState();
//   const [employeesCount,setEmployeeCount]=useState();
const [profileImage,setProfileImage]=useState();
const [profileImage1,setProfileImage1]=useState([]);
const [designationName,setDesignation]=useState();
const [teamLeader,setTeamLeader]=useState();
const [projectManager,setProjectManager]=useState();
const [dateOfJoining,setDateOfJoining]=useState();
const [yearsOfExperience,setYearsOfExperience]=useState();
const [identityNumber,setIdentityNumber]=useState();
const [gender,setGender]=useState();
const [bloodGroup,setBloodGroup]=useState();
const [dateOfBirth,setDateOfBirth]=useState();
const [address,setAddress]=useState();
const [uploadDocument,setUploadDocument]=useState();
const [panNumber,setPANNumber]=useState();
const [esiNumber, setESINumber] = useState();
const [pfNumber,setPFNumber]=useState();
const [uanNumber,setUANNumber]=useState();
const [accountHolderName,setAccountHolderName]=useState();
const [accountNumber,setAccountNumber]=useState();
const [branchName,setBranchName]=useState();
const [IFSCCode,setIFSCCode]=useState();
const [uploadDocument1,setUploadDocument1]=useState([]);
const [basicPay, setBasicPay] = useState();
const [employeeShareOfPF,setEmployeeShareOfPF] = useState();
const [HRA,setHRA] = useState();
const [employeeShareOfESI,setEmployeeShareOfESI] = useState();
const [medicalAllowance,setMedicalAllowance] = useState();
const [employerShareOfPF,setEmployerShareOfPF]=useState();
const [conveyanceAllowance,setConveyanceAllowance]=useState();
const [employerShareOfESI,setEmployerShareOfESI]=useState();
const [cityCompensatory,setCityCompensatory]=useState();
const [allowance,setAllowance]=useState();
const [leaveDeductions,setLeaveDeductions]=useState();
const [otherAllowance,setOtherAllowance]=useState();
const [TDS,setTDS]=useState();
  const token = localStorage.getItem('token')
  const navigate2 = useNavigate();
  const addEmployee = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const designation={designationName,teamLeader,projectManager}
    const bankDetails = {uanNumber,panNumber,esiNumber,pfNumber,accountNumber,branchName,accountHolderName,IFSCCode}
    // const payslipDetails = {basicPay,employeeShareOfPF,HRA,employeeShareOfESI,medicalAllowance,employerShareOfESI,employerShareOfPF,conveyanceAllowance,cityCompensatory,allowance,leaveDeductions,otherAllowance,TDS}
    const uploadEmpData ={bankDetails,password,contact,profileImage,name,email,contact,designation,identityNumber,gender,dateOfJoining,yearsOfExperience,dateOfBirth,bloodGroup,address,uploadDocument}
    console.log(uploadEmpData)
    const newEmployee = await fetch('http://192.168.0.112:9022/HRMS/employee/createEmployee',{
      method: 'POST',
      headers: {            
        'Content-type': 'application/JSON', 
          'Authorization': token
      },
      body: JSON.stringify(uploadEmpData)
  }).then((response)=>{
    if(token)
    {
      navigate2("/employees_list")
    }
    else{
      window.alert("Try Again with Admin-ID")
  
    } 
  })
  const newEmployeeData = await newEmployee.json()
  console.log(newEmployeeData)
  
  }

  
//   const employeeID = async () => {
//       const id = employeesCount+1
//       console.log(id)
//       setIdentityNumber(id)
//   } 
//   useEffect(() => {employeeID();},[]);

  async function UploadImage(e) {
      e.preventDefault()
    const formdata1=new FormData()
    formdata1.append('image',profileImage1)
    await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
    method: 'POST',
    body:formdata1
}).then((response)=>{
    console.log(response)
    return response.json()
}).then((resp)=>{
    console.log(resp);
    setProfileImage(resp.data.image); 
    console.log(profileImage);
} )
.catch((error)=>{
    console.log(error)
})
}

async function UploadDocument(e) {
    e.preventDefault()
const formdata2=new FormData()
formdata2.append('image',uploadDocument1)
await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
method: 'POST',
body:formdata2
}).then((response)=>{console.log(response)
    return response.json()
}).then((resp)=>{console.log(resp);setUploadDocument(resp.data.image); console.log(resp.data.image);} )
.catch((error)=>{
console.log(error)
})
}
    return (
        <div>
        {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
     <div className="homeFlex">
     <img src={pLA} alt="" />
     <div className='row'>
      <div className="Bg card col-12">
          <h3 className='bg-black text-white' style={{marginTop:'200px',marginBottom:'20px',paddingRight:'400px',paddingLeft:'400px'}}>ADD EMPLOYEE</h3>
      <div class="container background">
      <form class="ps-5 pe-4 form-style text-align-center ">
      <div class=" p-2 m-2">
            <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label className='col-6' htmlFor="">Identity Number</label>
                        <input class="col-6" type="number" name="name" id="name" onChange={(e)=>setIdentityNumber(e.target.value)}/>
            </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="image">Profile Image</label>
                        <input className="col-4" type="file" name="image" id="image" onChange={(e)=>setProfileImage1(e.target.files[0])} />
                        <input onClick={(e)=>UploadImage(e)} type="submit" value="Submit" className="col-2 sButPad  fw-bolder" />
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="name">Name</label>
                        <input class="col-6" type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="email">E-Mail</label>
                        <input class="col-6" type="email" name="email" id="email"onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="mobNumber">Mobile Number</label>
                        <input class="col-6" type="tel" name="mobNumber" id="mobNumber"onChange={(e)=>setMobNumber(e.target.value)} />
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for= "current-password">HRMS Password</label>
                        <input class="col-6" type=" current-password" name= "current-password" id= "current-password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="designation">Designation</label>
                        <input class="col-6" type="text" name="designation" id="designation" onChange={(e)=>setDesignation(e.target.value)} />
                    </div>
                    {/* <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="id.no">Identity Number</label>
                        <input class="col pe-5 me-5" type="number" name="id.no" id="id.no" onChange={(e)=>setIdentityNumber(e.target.value)}/>
                    </div> */}
                     <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="gender">Gender</label>
                        <div class="col-6">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Others"/>
                                <label class="form-check-label" for="inlineRadio3">Others</label>
                            </div>
                        </div>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="dateOfJoining">Date of Joining</label>
                        <input class="col-6" type="date" name="dateOfJoining" id="dateOfJoining" onChange={(e)=>setDateOfJoining(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="experience">Years of Experience</label>
                        <input class="col-6" type="number" name="experience" id="experience" onChange={(e)=>setYearsOfExperience(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="teamLeader">Team Leader</label>
                        <input class="col-6" type="text" name="teamLeader" id="teamLeader" onChange={(e)=>setTeamLeader(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="projectManager">Project Manager</label>
                        <input class="col-6" type="text" name="projectManager" id="projectManager" onChange={(e)=>setProjectManager(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="dateOfBirth">Date of birth</label>
                        <input class="col-6" type="date" name="dateOfBirth" id="dateOfBirth" onChange={(e)=>setDateOfBirth(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="bloodGroup">Blood Group</label>
                        <input class="col-6" type="text" name="bloodGroup" id="bloodGroup" onChange={(e)=>setBloodGroup(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="address">Address</label>
                        <textarea class="col-6" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></textarea>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="documents">Upload Resume</label>
                        <input className="col-4" type="file" name="" id="" onChange={(e)=>setUploadDocument1(e.target.files[0])}/>
                        <input onClick={(e)=>UploadDocument(e)} type="submit" value="Submit" className="col-2 sButPad  fw-bolder"/>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <h3 className="col-6 fw-bolder">ESI AND PF DETAILS</h3>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="uanNumber">UAN Number</label>
                        <input class="col-6" type="text" name="uanNumber" id="uanNumber" onChange={(e)=>setUANNumber(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="panNumber">PAN Number</label>
                        <input class="col-6" type="text" name="panNumber" id="panNumber" onChange={(e)=>setPANNumber(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="esiNumber">ESI Number</label>
                        <input class="col-6" type="text" name="esiNumber" id="esiNumber" onChange={(e)=>setESINumber(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="pfNumber">PF Number</label>
                        <input class="col-6" type="text" name="pfNumber" id="pfNumber" onChange={(e)=>setPFNumber(e.target.value)}/>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <h3 className="col-6 fw-bolder">BANK ACCOUNT DETAILS</h3>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="AccountHolderName">Account Holder Name</label>
                        <input class="col-6" type="text" name="accountHolderName" id="accountHolderName" onChange={(e)=>setAccountHolderName(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="accountNumber">Bank Account Number</label>
                        <input class="col-6" type="text" name="accountNumber" id="accountNumber" onChange={(e)=>setAccountNumber(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="ifscCode">IFSC Code</label>
                        <input class="col-6" type="text" name="ifscCode" id="ifscCode" onChange={(e)=>setIFSCCode(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                        <label class="col-6" for="branchName">Bank Branch Name</label>
                        <input class="col-6" type="text" name="bankBranch" id="bankBranch" onChange={(e)=>setBranchName(e.target.value)}/>
                    </div>
                    <div className="mt-4" style={{marginLeft:'360px'}}>
                        <input onClick={addEmployee} type="submit" value="Submit" className=" br butPad px-5 py-2 my-5 fw-bolder" />
                    </div>
                    </div>
                    </form>
            </div>
        </div>
        </div>
        </div>
        </div>
     
    );
}