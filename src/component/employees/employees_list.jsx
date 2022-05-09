import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from '../Navabar/adminNavbar';
import EmpNavbar from '../Navabar/empNavbar';
import { useNavigate } from "react-router-dom";
import officeMeet from '../UI/Assets/EMPLOYEE/EMPLOYEE_LIST_PAGE.jpg';
import { Avatar } from "@mui/material";

function EmployeesList(){
    const navToFullProfile = useNavigate()
    const [employeesListData,setEmployeesData] = useState({});
    const token = localStorage.getItem('token');
    console.log(employeesListData)
    const employeesListDetails = async () => {
        axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/employee/getAllEmployee',
            'headers':{
                'Authorization':token 
            }
        })
        .then((response) =>{
            console.log(response)
            setEmployeesData(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {employeesListDetails();
    },[]);
    function viewProfile(e,empList){
        navToFullProfile('/viewEmployeeProfile',{state:empList})
    }

    console.log(employeesListData)
    return(
        <div>
        {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
     <div className="homeFlex container-fluid">
     <img src={officeMeet} width='2000px' height='1000px' alt="" />
     <div className=''>
      <div className="Bg card">
          <h3 className='pb-3 pt-4' style={{backgroundColor:'#0096FF',color:'white',marginTop:'100px',marginBottom:'20px',paddingRight:'800px',paddingLeft:'800px'}}>EMPLOYEE LIST</h3>
      <div class="bg-#0096FF">
      {employeesListData.length == 0 ? <h5> No Data Found </h5>:
        employeesListData.length >= 0 && employeesListData.map((empList) =>
        <>    {console.log(empList)}
        <div className="homeFlex">
               <Avatar src={empList.profileImage} sx={{ width: 175, height: 175 }}  alt="Office Image" />
               <div>
                   <h5 className=" m-2" >Name : {empList.name}</h5> 
    
                   <h5 className=" m-2" >Designation : {empList.designation.designationName}</h5> 
              
                   <h5 className=" m-2 " >Identity Number : {empList.identityNumber}</h5> 

                   <button className=" btn btn-primary btn-sm px-5 m-3 mb-5"  type='button' onClick={(e)=>viewProfile(e,empList)}>View Profile</button>
                   </div>
        </div>
         </>
         )}
        </div>
      </div>
    </div>
    </div>
    </div>
    );
}

export default EmployeesList;