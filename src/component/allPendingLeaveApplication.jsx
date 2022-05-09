import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import pLA from './UI/Assets/EMPLOYEE/EMPLOYEE_LIST_PAGE.jpg';
export default function AllPendingLeaveApplicationList(){
    const [pendingLeaveApplicationData, setpendingLeaveApplicationData] = useState([]);
    // const [acceptMsg, setAcceptMsg] = useState();
    // const [rejectMsg, setRejectMsg] = useState();
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('ID');
    console.log(token)
    const key = 'pending';
    const pendingLeaveApplicationList = async () => {
     axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/leaveApplication/adminViewEmployeeLeaveStatus/'+key,
            'headers':{
                'Authorization':token
            }
        }).then((response) => {
          let res = response.data.datas
          
          console.log(res)
          setpendingLeaveApplicationData(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {pendingLeaveApplicationList();},[]);

    const Accept = async (e,empId) => {
        e.preventDefault()
        let id=empId;
        await  axios({
              'method':'GET',
              'url':'http://192.168.0.112:9022/HRMS/leaveApplication/acceptLeave/'+id
          }).then((res) => {
              console.log(res)
              window.location.reload(false)
            //   setAcceptMsg(res)
          }).catch((err) =>{
              console.log(err)
          })
        }

    const Reject = async (e,empId) => {
        e.preventDefault()
        let id=empId;
        await  axios({
              'method':'GET',
              'url':'http://192.168.0.112:9022/HRMS/leaveApplication/rejectLeave/'+id
          }).then((res) => {
              console.log(res)
              window.location.reload(false)
            //   setRejectMsg(res)
          }).catch((err) =>{
          console.log(err)
          })
        }
const leaveAppData = pendingLeaveApplicationData
console.log(leaveAppData)

// console.log(leave[0].fromDate)
// console.log(acceptMsg)

    return(
       <div>
           {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
        <div className="homeFlex">
        <img src={pLA} width='1900px' height='900px' alt="" />
        <div className='row'>
         <div className="Bg card col-12">
             <h3 className='bg-black text-white' style={{marginTop:'200px',marginBottom:'20px',paddingRight:'400px',paddingLeft:'400px'}}>PENDING LEAVE APPLICATION</h3>
         <div class="container background">
            <div className="my-5 py-5">
                <div className="form-style text-align-center background">
               
            {leaveAppData.length == 0 ? <h5> No Data Found </h5>:
            leaveAppData.length > 0 && leaveAppData.map((leaveData) => 
               <>
               
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Name : </label>
                    <label class="col pe-5 me-5">{leaveData.userId.name}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Email-ID : </label>
                    <label class="col pe-5 me-5">{leaveData.userId.email}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Mobile Number : </label>
                    <label class="col pe-5 me-5">{leaveData.userId.contact}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Designation :</label>
                    <label class="col pe-5 me-5">{leaveData.userId.designation.designationName}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Identity Number :</label>
                    <label class="col pe-5 me-5">{leaveData.userId.identityNumber}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">From Date :</label>
                    <label class="col pe-5 me-5">{leaveData.fromDate}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">To Date : </label>
                    <label class="col pe-5 me-5">{leaveData.toDate}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Full/Half Day :</label>
                    <label class="col pe-5 me-5"> {leaveData.fullOrHalfDay}</label>
                </div>
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Reason :</label>
                    <label class="col pe-5 me-5"> {leaveData.reason}</label>
                </div> 
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Message :</label>
                    <label class="col pe-5 me-5">{leaveData.reasonInDetails}</label>
                </div> 
        
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Added Document :</label>
                    <iframe src={leaveData.uploadDocument} class="col pe-5 me-5" width="20%" height="200px"/>
                </div> 
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Team Leader : </label>
                    <label class="col pe-5 me-5"> {leaveData.userId.designation.teamLeader}</label>
                </div> 
                <div class="row p-2 m-2 tc">
                    <label class="col pe-5 me-5">Project Manager :</label>
                    <label class="col pe-5 me-5"> {leaveData.userId.designation.projectManager}</label>
                </div>
                <div class="row p-2 m-2 tc mt-5">
                    <div className="col-3"></div>
                    <button onClick={(e)=>Accept(e,leaveData._id)} className=" btn-sm bg-success col-2 ms-5 me-5">Accept</button>
                    <button onClick={(e)=>Reject(e,leaveData._id)} className=" btn-sm bg-danger col-2 ms-5">Reject</button>
                </div>
               
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
