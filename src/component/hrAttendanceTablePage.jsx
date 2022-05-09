import React, { useState, useEffect } from 'react';
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import axios from 'axios';
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from 'react-router-dom';
import bee from './UI/Assets/LOGIN_&_HOMEPAGE/bee.png';
import sideImage from './UI/Assets/LOGIN_&_HOMEPAGE/hrms_img.png';
export default function HrAttendanceTablePage() {
    const {state}=useLocation([]);
    console.log(state)
    const nav = useNavigate(); 
    const [fromDate, setFromDate] = useState();
const [toDate, setToDate] = useState();
const [numAttendance,getAttendanceNum] = useState();
const [attendanceDetails,getAttendanceDetails] = useState([]);
const token = localStorage.getItem('token');
const attendance = state[0]
const f = state[1]
const t = state[2]
setFromDate(f)
setToDate(t)
console.log(fromDate)
console.log(toDate)
    const getAllAttendance = async (e) => {
        e.preventDefault();
       await axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/attendance/getAllAttendance?fromDate='+fromDate+'&toDate='+toDate+'&page=1&limit=10',
            'headers':{
                'Authorization':token
            }
        }).then((response) => {
            console.log(response.data.value.result)
            getAttendanceDetails(attendance)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() =>{getAllAttendance();},[]);

    const getfullAttendance = async (currentPage) => {

       await axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/attendance/getAllAttendance?fromDate='+fromDate+'&toDate='+toDate+'&page='+currentPage+'&limit='+10,
            'headers':{
                'Authorization':token
            }
        }).then((response) => {
            console.log(response.data.value.result)
            let result=response.data.value.result;
            
            getAttendanceDetails(response.data.value.result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    

    const getNumAttendance = async () => {
       
       await axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/attendance/allAttendanceDataCount'
        }).then((response) => {
            console.log(response.data.DataCount)
            getAttendanceNum(response.data.DataCount)
        })
        .catch((error) => {
            console.log(error)
        })
    }
     useEffect(() =>{getNumAttendance();},[]);

    const handlePageClick = async (data) => {
        console.log(data.selected);
        var currentPage = data.selected + 1;
    
      getfullAttendance(currentPage);
      };

      const navi = () => {
        nav('/allEmpAttendance')
      }

  return (
    <div>
              <div>
{localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
<div className="homeFlex">
<div className="mt-5 pt-5">
    <img src={bee} alt="Firebee Logo" width={300} className='me-4 p-4 logoAdj' />
    <h1 className="fw-bolder ms-5 height: 100px" style={{'font-size':'120px'}}>HRMS</h1>
</div>

<div className="row" style={{marginTop:'220px'}}>
    <div className="col-1"></div>
    <img className="fPsideImage col-10" src={sideImage} alt="" height='665' width="100%" />
    <div className="col-1"></div>
  </div>
</div>
</div>
        <div className="Bg mb-5">
 
    <div class="container my-5 py-5 background">
    <div className="">
                   <div className="row">
                         <div className="col-4"></div>
                         <h3 className="col-6">Attendance</h3>
                     </div>
                     <table cellSpacing="0" cellPadding="0">
           <thead>
             <tr>
               <td>Date</td>
               <td>Desgination</td>
               <td>Department</td>
               <td>EmployeeCode</td>
               <td>EmployeeName</td>
               <td>Duration</td>
               <td>InTime</td>
               <td>OutTime</td>
               <td>Overtime</td>
               <td>Shift</td>
               <td>PunchRecords</td>
               <td>Status</td>
               <td>Team</td>
             </tr>
           </thead>
           <tbody>
           {attendanceDetails.length == 0 ? <h5> No Data Found </h5>:
                attendanceDetails.length > 0 && attendanceDetails.map((x) => 
                   <>
                <tr>
                  <td>{x.Date}</td>
                  <td>{x.Degination}</td>
                  <td>{x.Department}</td>
                  <td>{x.EmployeeCode}</td>
                  <td>{x.EmployeeName}</td>
                  <td>{x.Duration}</td>
                  <td>{x.InTime}</td>
                  <td>{x.OutTime}</td>
                  <td>{x.Overtime}</td>
                  <td>{x.Shift}</td>
                  <td>{x.PunchRecords}</td>
                  <td>{x.Status}</td>
                  <td>{x.Team}</td>
                </tr>
                </>
                )}
          </tbody>
        </table>
        </div>
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={numAttendance/10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        <input type="submit" onClick={navi} value="BACK"  className="br py-1 my-5 butPad fw-bolder" style={{marginLeft:'500px'}} />
         
    </div>
   
    </div>
    </div>
  )
}
