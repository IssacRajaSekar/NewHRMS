import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import pLA from './UI/Assets/Oraganization details/modern-business-building-with-glass-wall-from-empty-floor.jpg';

export default function LeaveApplication(){
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [day, setDay] = useState();
    const [typeOfLeave, setTypeOfLeave] = useState();
    const [reason, setReason] = useState();
    const [message, setMessage] = useState();
    const [doc, setDoc] = useState([]);
    const navigate1 = useNavigate();
    const formdata = new FormData()
    formdata.append('typeOfLeave',typeOfLeave)
    formdata.append('fromDate',fromDate)
    formdata.append('toDate',toDate)
    formdata.append('fullOrHalfDay',day)
    formdata.append('reason',reason)
    formdata.append('reasonInDetails',message)
    formdata.append('uploadDocument',doc)
    console.log(formdata)
    const SubmitLeaveRequest = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        let leaveApplication = await fetch('http://192.168.0.112:9022/HRMS/leaveApplication/createLeaveApplication',{
            method: 'POST',
            headers:{
                'Authorization' : token, 
            },
            body: formdata
        
        })
        console.log(token)
        leaveApplication = await leaveApplication.json()
        localStorage.setItem('employeeId',leaveApplication.data.employeeId)
        if(token)
        { 
          navigate1("/leaveApplicationStatus");
          console.log("Leave Request Sent")
        }
        else{
          navigate1("/leave_application")
          console.log("Request Failed! Try Again.")
        }
    }
    return(
        <div>
        {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
     <div className="homeFlex">
     <img src={pLA} width='2500px' height='900px' alt="" />
     <div className='row'>
      <div className="Bg card col-12 ">
            <h3 className='bg-black text-white' style={{marginTop:'200px',marginBottom:'20px',paddingRight:'200px',paddingLeft:'500px'}}>LEAVE APPLICATION</h3>
            <div class="container background">
                <form className="background" action="" style={{paddingLeft:'100px',paddingRight:'100px'}}> 
                    <div class="row">
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-5' style={{backgroundColor:'#0096FF',color:'white'}}>
                            <label className='col-6' for="from_date">From</label>
                            <input className="col-6 nbr" type="date" name="from_date" id="from_date" onChange={(e) => setFromDate(e.target.value)}/>
                        </div>
                    <div className='row ps-3 pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0096FF',color:'white'}}>
                            <label className='col-6' for="to_date">To</label>
                            <input className="col-6 nbr" type="date" name="to_date" id="to_date" onChange={(e) => setToDate(e.target.value)}/>
                    </div>
                    <div className='row pe-1 pt-1 pb-1 mb-5 mt-3 ' style={{backgroundColor:'#0096FF',color:'white'}}>
                            <select className='col-6 nbr' aria-label="Default select example" onChange={(e) => setDay(e.target.value)} >
                                    <option selected>Day</option>
                                    <option value="Full Day">Full Day</option>
                                    <option value="Half Day">Half Day</option>
                            </select>
                        
                        {/* <div className="row mt-4 ms-3"> */}
                        <div className='col-6'>
                            <select class="borRad row form-select justify-content-center" aria-label="Default select example" onChange={(e) => setTypeOfLeave(e.target.value)} >
                                    <option selected>Leave Puropse</option>
                                    <option value="casualLeave">Casual Leave</option>
                                    <option value="sickLeave">Sick Leave</option>
                                    <option value="medicalLeave">Medical Leave</option>
                                    <option value="marriageLeave">Marriage</option>
                                    <option value="pregnancyLeave">Pregnancy Leave</option>
                            </select>
                        </div>
                        </div>
                        <div className='row ps-2 pe-2 pt-2 pb-2 mb-5 mt-3 ' style={{backgroundColor:'#0096FF',color:'white'}}>
                            <input class="col-12 nbr"  type="text" name="reason" id="reason" required placeholder="Reason" onChange={(e) => setReason(e.target.value)}/>
                        </div>
                        <div className='row ps-2 pe-2 pt-2 pb-2 mb-5 mt-3 ' style={{backgroundColor:'#0096FF',color:'white'}}>
                            <textarea class=" me-3 p-5 nbr" name="leave_application_msg" id="leave_application_msg" placeholder="...in detail" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className='row ps-2 pe-2 pt-2 pb-2 mb-5 mt-3 ' style={{backgroundColor:'#0096FF',color:'white'}}>
                            <input type="file" name="medical_document" class="col-12 nbr"   id="medical_document" onChange={(e) => setDoc(e.target.files[0])}/>
                        </div>
                        <div className="mt-4" style={{marginLeft:'450px'}}>
                        <button type="button" className=" nbr butPad px-5 py-2 my-5 fw-bolder" onClick={SubmitLeaveRequest}>Submit</button>
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
 