import React, { useState, useEffect } from 'react';
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import axios from 'axios';
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from 'react-router-dom';
import bee from './UI/Assets/LOGIN_&_HOMEPAGE/bee.png';
import sideImage from './UI/Assets/LOGIN_&_HOMEPAGE/hrms_img.png';
import Slide from '@mui/material/Slide';

const AllEmpAttendance = () => {
const nav = useNavigate(); 
const [fromDate, setFromDate] = useState();
const [toDate, setToDate] = useState();
const [numAttendance,getAttendanceNum] = useState();
const [attendanceDetails,getAttendanceDetails] = useState([]);
const token = localStorage.getItem('token');
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
            const resp = [response.data.value.result,fromDate,toDate]
            getAttendanceDetails(response.data.value.result )
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function navToTable(e,resp ){
        nav('/hrAttendanceTablePage',{state:resp})
      }

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
  
    return (
        <>
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
<div className='row'>
<div className='col-3'></div>
         <div className="Bg card col-6">
             <h3 className='bg-black text-white' style={{marginTop:'200px',marginBottom:'20px',paddingInline:'310px'}}>All Employee Attendance</h3>
         <div class="container background">
             <form class="ps-5 pe-4 form-style text-align-center " action="" onSubmit={(e)=>getAllAttendance(e)}>
      
             <div class=" p-2 m-2">
             <div className='row pe-1 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                <label className='col-6' htmlFor="">From Date</label>
                <input className="col-6" type="text" placeholder='yyyy-mm-dd' name="from_date" id="from_date" onChange={(e) => setFromDate(e.target.value)}/>
            </div>
             <div className='row pe-1 pt-1 pb-1 mb-5' style={{backgroundColor:'#0000FF',color:'white'}}>
                <label className='col-6'  htmlFor="">To Date</label>
                <input className="col-6" type="text" placeholder='yyyy-mm-dd' name="to_date" id="to_date"onChange={(e) => setToDate(e.target.value)}/>
            </div>
                <div class="row px-5 mx-5 my-3">
                <div className='col-4 me-4'></div>
                <input  type="submit" value="Submit" className=" ms-2 col-3 btn btn-light butPad border-1 py-1 my-1 " />
                </div>
            </div>
        <div className='hide'>

                 <table cellSpacing="0" cellPadding="0" className='px-4'>
       <thead>
         <tr className='bg-black text-white'>
           <td className='px-4'>Date</td>
           <td>EmployeeCode</td>
           <td>EmployeeName</td>
           <td>InTime</td>
           <td>OutTime</td>
           <td>PunchRecords</td>
           <td>Status</td>
           
         </tr>
       </thead>
       <tbody>
       {attendanceDetails.length == 0 ? <h5 style={{marginLeft:'150px'}}> No Data Found </h5>:
            attendanceDetails.length > 0 && attendanceDetails.map((x) => 
               <>
            <tr>
              <td>{x.Date}</td>
              <td>{x.EmployeeCode}</td>
              <td>{x.EmployeeName}</td>
              <td>{x.InTime}</td>
              <td>{x.OutTime}</td>
              <td>{x.PunchRecords}</td>
              <td>{x.Status}</td>
        
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
    </form>
    </div>
    </div>
    </div>
    <div className='col-3'></div>
    </>
    );

}
export default AllEmpAttendance;

