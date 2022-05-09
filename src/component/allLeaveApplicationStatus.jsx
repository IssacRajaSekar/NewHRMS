import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import pLA from './UI/Assets/EMPLOYEE/ADD_EMPLOYEE/EMPLOYEE_LIST.jpg';

export default function AllLeaveApplicationStatus(){
    const [allAcceptedLeaveApplicationData, setallAcceptedLeaveApplicationData] = useState([]);
    const [allRejectedLeaveApplicationData, setallRejectedLeaveApplicationData] = useState([]);
    // const [acceptMsg, setAcceptMsg] = useState();
    // const [rejectMsg, setRejectMsg] = useState();
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('ID');
    console.log(token);
    const key1 = 'accepted';
    const allAcceptedLeaveApplicationList = async () => {
     axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/leaveApplication/ownerViewEmployeeLeaveStatus/'+key1, 
            'headers':{
                'Authorization':token
            }
        }).then((response) => {
            console.log(response)
          let res = response.data.datas
          console.log(res,"res")
          setallAcceptedLeaveApplicationData(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {allAcceptedLeaveApplicationList();},[]);

    const key2 = 'rejected';
    const allRejectedeLeaveApplicationList = async () => {
     axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/leaveApplication/ownerViewEmployeeLeaveStatus/'+key2,
            'headers':{
                'Authorization':token
            }
        }).then((response) => {
          let res = response.data.datas
          
          console.log(res)
          setallRejectedLeaveApplicationData(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {allRejectedeLeaveApplicationList();},[]);

const leaveAppData = allAcceptedLeaveApplicationData.concat(allRejectedLeaveApplicationData);
console.log(leaveAppData)
const leave = Object.values(leaveAppData)
// console.log(leave[0].fromDate)
// console.log(acceptMsg)

    return(
      <div>
      {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
   <div className="homeFlex">
   <img src={pLA} alt="" />
   <div className='row'>
    <div className="Bg card col-12">
        <h3 className='bg-black text-white' style={{marginTop:'200px',marginBottom:'20px',paddingRight:'400px',paddingLeft:'400px'}}>LEAVE APPLICATION STATUS</h3>
    <div class="container background">
        <div className="my-5 py-5">
            <div className="form-style text-align-center background">
            {leaveAppData.length == 0 ? <h5> No Data Found </h5>:
               leaveAppData.length > 0 && leaveAppData.map((leavedata)=>
            
               <>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Name :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.name}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Email-ID :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.email}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Mobile Number :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.contact}</label>
               </div> 
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Designation :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.designation.designationName}</label>
               </div> 
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Identity Number :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.identityNumber}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">From Date :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.fromDate}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">From Date :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.fromDate}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">To Date :</label>
                 <label class="col pe-5 me-5" for="name"> {leavedata.toDate}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Full/Half Day : </label>
                 <label class="col pe-5 me-5" for="name">{leavedata.fullOrHalfDay}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Reason :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.reason}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Message :</label>
                 <label class="col pe-5 me-5" for="name">{leavedata.reasonInDetails}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Resume :</label>
                 <iframe class="col pe-5 me-5" for="name" src={leavedata.uploadDocument}></iframe>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Team Leader : </label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.designation.teamLeader}</label>
               </div>
               <div class="row p-2 m-2">
                 <label class="col pe-5 me-5" for="name">Project Manager : </label>
                 <label class="col pe-5 me-5" for="name">{leavedata.userId.designation.projectManager}</label>
               </div>
               <div class="row p-2 m-2 ">
                 <label class="col pe-5 me-5" for="name">Status : </label>
                 <label class="col pe-5 me-5" for="name"> {(leavedata.leaveApplyStatus).toUpperCase()}</label>
               </div>
               <hr className="border border-dark mb-5"/>

                </>
                
            
                )}
            </div>
            
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        );
    }
