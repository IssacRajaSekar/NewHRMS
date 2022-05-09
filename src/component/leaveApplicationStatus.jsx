import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function LeaveApplicationStatus(){
    const [LeaveApplicationData, setLeaveApplicationData] = useState([]);
    const EmpId = localStorage.getItem('employeeId')
    console.log(EmpId)
    
    // const [rejectedLeaveApplicationData, setRejectedLeaveApplicationData] = useState([]);
    // const [acceptedLeaveApplicationData, setacceptedLeaveApplicationData] = useState([]);
    // const [acceptMsg, setAcceptMsg] = useState();
    // const [rejectMsg, setRejectMsg] = useState();
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('ID');
    console.log(token)
    // const allPendingLeaveApplicationList = async () => {
    //     let key ='pending';
    //  axios({
    //         'method':'GET',
    //         'url':'http://192.168.0.112:9022/HRMS/leaveApplication/employeeViewOurLeaveApplicationStatus/'+key,
    //         'headers':{
    //             'Authorization':token
    //         }
    //     }).then((response) => {
    //       let res = response.data.datas
    //       console.log(res,"pending")
    //       setPendingLeaveApplicationData(res)
    //     })
    //     .catch((error) =>{
    //         console.log(error)
    //     })
    // }

    // // useEffect(() => {allPendingLeaveApplicationList();},[]);

    // const rejectedLeaveApplicationList = async () => {
    //     let key ='reject';
    //     axios({
    //            'method':'GET',
    //            'url':'http://192.168.0.112:9022/HRMS/leaveApplication/employeeViewOurLeaveApplicationStatus/'+key,
    //            'headers':{
    //                'Authorization':token
    //            }
    //        }).then((response) => {
    //          let res = response.data.datas
             
    //          console.log(res,'reject')
    //          setRejectedLeaveApplicationData(res)
    //        })
    //        .catch((error) =>{
    //            console.log(error)
    //        })
    //    }
   
    //    useEffect(() => {rejectedLeaveApplicationList();},[]);

       const LeaveApplicationList = async () => {
        // let key ='accept';
        axios({
               'method':'GET',
               'url':'http://192.168.0.112:9022/HRMS/leaveApplication/employeeViewLeaveApplication/'+EmpId
            //    'headers':{
            //        'Authorization':token
            //    }
           }).then((response) => {
             let res = response.data
             
             console.log(res,"leaveAppStatus")
             setLeaveApplicationData(res)
           })
           .catch((error) =>{
               console.log(error)
           })
       }
   
       useEffect(() => {
        LeaveApplicationList();
        // rejectedLeaveApplicationList();
        // acceptedLeaveApplicationList();
     
    },[]);
   
    // const leaveApp = pendingLeaveApplicationData.concat(rejectedLeaveApplicationData)
    const leaveAppData = LeaveApplicationData
    console.log(leaveAppData,"all")


// console.log(leave[0].fromDate)
// console.log(acceptMsg)

    return(
        <div className="Bg mb-5"> 
              {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
            <div class="container my-5 py-5">  
    <form class="form-style text-align-center background" action="">
    <div className="row">
            <div className="col-4"></div>
            <h3 className="col-6">Leave Application Status</h3>
    </div>
            {leaveAppData.length == 0 ? <h5> No Data Found </h5>:
            leaveAppData.length == 0 ? <h3 className="my-5 px-5 py-5"> No Data Found </h3>:
               leaveAppData.length > 0 && leaveAppData.map((leaveData) => 
               <>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Name :</label>
                <label class="col pe-5 me-5">{leaveData.userId.name}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Email-ID :</label>
                <label class="col pe-5 me-5">{leaveData.userId.email}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Mobile Number :</label>
                <label class="col pe-5 me-5">{leaveData.userId.contact}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Designation :</label>
                <label class="col pe-5 me-5">{leaveData.userId.designation.designationName}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Identity Number :</label>
                <label class="col pe-5 me-5">{leaveData.userId.identityNumber}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">From Date :</label>
                <label class="col pe-5 me-5">{leaveData.fromDate}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">To Date :</label>
                <label class="col pe-5 me-5">{leaveData.toDate}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">To Date :</label>
                <label class="col pe-5 me-5">{leaveData.toDate}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Full/Half Day :</label>
                <label class="col pe-5 me-5">{leaveData.fullOrHalfDay}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Reason :</label>
                <label class="col pe-5 me-5">{leaveData.reason}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Message :</label>
                <label class="col pe-5 me-5">{leaveData.reasonInDetails}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Medical Document :</label>
                <iframe class="col pe-5 me-5" src={leaveData.uploadDocument}></iframe>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Team Leader :</label>
                <label class="col pe-5 me-5">{leaveData.userId.designation.teamLeader}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Project Manager :</label>
                <label class="col pe-5 me-5">{leaveData.userId.designation.projectManager}</label>
        </div>
        <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Status :</label>
                <label class="col pe-5 me-5">{(leaveData.leaveApplyStatus).toUpperCase()}</label>
        </div>
        <hr className="border border-dark mb-5" />
                </>
                
               )}
               </form>
            </div>
            
        </div>
        );
    }
