import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../Navabar/adminNavbar";
import EmpNavbar from "../Navabar/empNavbar";
import sideImage from '../UI/Assets/LOGIN_&_HOMEPAGE/hrms_img.png';
import '../fogetPassword/forgetPassword.css';
import bee from '../UI/Assets/LOGIN_&_HOMEPAGE/bee.png';

export default function ForgetPassword() {
    const [email, setEmail] = useState();
    const [contact,setContact] = useState();
    const token = localStorage.getItem('token');
    const navigate1=useNavigate();
    console.log(token)
    const [otp, setOtp] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    let sendOtp = {email,contact};
    let createPasswordData = {otp,newPassword,confirmPassword,email};
    console.log(createPasswordData)
    const forgetPassword = () => {
        axios({
        'method': 'POST',
        'url': 'http://192.168.0.112:9022/HRMS/employee/forgotPassword', 
        headers:{
            'Authorization':token,
            'Content-Type':'application/json'
        },
        'data': sendOtp
        
         })
    
    }
   
    const createPassword = () => {
        var res =""
        axios({
        'method': 'POST',
        'url':'http://192.168.0.112:9022/HRMS/employee/forgotPassword',
        headers:{
            'Content-Type':'application/json'
        },
        'data': createPasswordData
        }).then((response)=>{
            console.log(response)
            const res = response;
            localStorage.clear();
            navigate1('/')
            window.location.reload(false)
        }).catch((error)=>{
            console.log(error)
        })
    }
 
    return (
        <>
        <img src={bee} alt="bee" width="100px" className="bee left"/>
        <p className="fw-bold">BEE HRMS</p>
        <div className="container-fluid fPFlex fPSideImage">
      <div className="row">
        <div className="col-1"></div>
        <div className="fPBoxBackground border border-dark col-5 pt-5 fPAni2" >
           <p className="fw-bold fPText h1">Forget Password</p>
            <div className="my-1 p-3">
            <input className="fPBr btn-light text-align-center border-dark fPInpPad fw-bold ms-4" type="email" name="email" id="email" placeholder="Enter Mail-ID" onChange={(e) => setEmail(e.target.value)} />
            <input className="fPBr btn-light text-align-center border-dark fPInpPad  fw-bold ms-4" type="tel" name="contactNumber" id="contactNumber" placeholder="Enter Contact Number" onChange={(e) => setContact(e.target.value)} />
            <input onClick={forgetPassword} type="submit" value="Send OTP" className="fw-bolder fPButton1 btn btn-light border-dark" />
                <br/>
            <input className="fPBr btn-light text-align-center border-dark fPInpPad ms-4 fw-bold" type="text" name="otp" id="otp" onChange={(e) => setOtp(e.target.value)} required placeholder="Enter OTP" />
            {/* <input className="fPBr btn-light text-align-center border-dark fPInpPad ms-4" type="email" name="email" id="email" placeholder="Re-Enter Mail-ID" onChange={(e) => setEmail(e.target.value)} /> */}
            <input className="fPBr btn-light text-align-center border-dark fPInpPad ms-4 fw-bold" type="text" name="otp" id="otp" onChange={(e) => setNewPassword(e.target.value)} required placeholder="Create New Password" />
            <input className="fPBr btn-light text-align-center border-dark fPInpPad ms-4 fw-bold" type="text" name="otp" id="otp" onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Re-Enter Password" /><br/>
            <input onClick={createPassword} type="submit" value="Create Password" className="fw-bolder fPButton2 btn btn-light border-dark" />
   </div>
                 <div className="col-3"></div>
             
       </div>
      </div>
   
  <div className="row mt-5 pt-2">
    <div className="col-1"></div>
    <img className="fPAni1 fPsideImage col-10" src={sideImage} alt="" height='665' width="100%" />
    <div className="col-1"></div>
  </div>
</div>
</>
       
//             <div className="row">
//                  {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
//                 <div className="col-1"></div>
//       <div className="col-2 my-5 cardForgetPassword p-5 no-borderRadiusImportant inputShadow" style={{borderRadius: '5px!important'}} >
//   <h2 className="card-title mb-4">Forget Password</h2>
//   <input className=" innerShadow btn-light text-align-center border-1 py-2 px-5 my-2 no-borderRadiusImportant" type="email" name="email" id="email" placeholder="Enter Mail-ID" onChange={(e) => setEmail(e.target.value)} />
//                                     <input className=" innerShadow btn-light text-align-center border-1 py-2 px-5 my-2 no-borderRadiusImportant" type="tel" name="contactNumber" id="contactNumber" placeholder="Enter Contact Number" onChange={(e) => setContact(e.target.value)} />
//                                     <input onClick={forgetPassword} type="submit" value="Send OTP" className="tc mx-1 px-3 btn btn-light innerShadow border-1 py-2 my-4 no-borderRadiusImportant" />
//                                     <br/>
//                                     <input className=" innerShadow btn-light text-align-center border-1 py-2 px-5 my-2 no-borderRadiusImportant" type="text" name="otp" id="otp" onChange={(e) => setOtp(e.target.value)} required placeholder="Enter OTP" />
//                                     <input className=" innerShadow btn-light text-align-center border-1 py-2 px-5 my-2 no-borderRadiusImportant" type="email" name="email" id="email" placeholder="Re-Enter Mail-ID" onChange={(e) => setEmail(e.target.value)} />
//                                     <input className=" innerShadow btn-light text-align-center border-1 py-2 px-5 my-2 no-borderRadiusImportant" type="text" name="otp" id="otp" onChange={(e) => setNewPassword(e.target.value)} required placeholder="Create New Password:" />
//                                     <input className=" innerShadow btn-light text-align-center border-1 py-2 px-5 my-2 no-borderRadiusImportant" type="text" name="otp" id="otp" onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Re-Enter Password:" /><br/>
//                                     <input onClick={createPassword} type="submit" value="Create Password" className="tc mx-1 px-3 btn btn-light innerShadow border-1 py-2 my-4 no-borderRadiusImportant" />
//   </div>
//                 <div className="col-3"></div>
//             </div>

    );
}
