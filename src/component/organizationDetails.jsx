import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import ProtectedRoute from "./protected";

function OrganizationDetails(){
const [organizationData, setorganizationData] = useState({});
const navToUpdate =useNavigate()
console.log(organizationData)
const organizationDetails = async () => {
    // const token = localStorage.getItem('token');
    axios({
        'method':'GET',
        'url': 'http://192.168.0.112:9022/HRMS/organization/getOrganization'   
    })
    .then((responce) => {
        console.log(responce)
        setorganizationData(responce.data.message)
      
    })
    .catch((error) => {
        console.log(error)
    })
} 

useEffect(() =>  {
    organizationDetails();
}, []);
function update(e,list){
    console.log(list)
    navToUpdate('/updateOrganization',{state:list})
}

// navToDelete('/deleteOrganization')
// const navToUpdate =useNavigate()
// navToUpdate('/updateOrganization')
// ProtectedRoute.isAuthenticated()
ProtectedRoute.isAuthenticated()
return(
    <div className="Bg mb-5">     
    {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
   <div class="container my-5 py-5">  
   <form class="form-style text-align-center background" action="">
   <div className="row">
            <div className="col-4"></div>
                <h3 className="col-6">Organisation</h3>
            </div>
        {organizationData.length == 0 ? <h5> No Data Found </h5>:
            organizationData.length > 0 && organizationData.map((orgList)=>
                <>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Office Image</label>
                <img class="col pe-5 me-5" src={orgList.officeImage}></img>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Comapany Name :</label>
                <label class="col pe-5 me-5">{orgList.companyName}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">CEO :</label>
                <label class="col pe-5 me-5">{orgList.CEO}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">About :</label>
                <label class="col pe-5 me-5">{orgList.about}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Achievements :</label>
                <iframe class="col pe-5 me-5"> {orgList.achievementDocuments}</iframe>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Mail-ID :</label>
                <label class="col pe-5 me-5">{orgList.email}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Contact :</label>
                <label class="col pe-5 me-5"> {orgList.contact}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Founders :</label>
                <label class="col pe-5 me-5"> {orgList.founders}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Head Quarters :</label>
                <label class="col pe-5 me-5">{orgList.headQuarters}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Number of Employees :</label>
                <label class="col pe-5 me-5"> {orgList.numberOfEmployees}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Revenue :</label>
                <label class="col pe-5 me-5">{orgList.revenue}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Subsidiaries :</label>
                <label class="col pe-5 me-5">{orgList.subsidiaries}</label>
            </div>
            <div class="row p-2 m-2 tc">
                <label class="col pe-5 me-5" for="identityNumber">Websit Link :</label>
                <label class="col pe-5 me-5">{orgList.websiteLink}</label>
            </div>
           
                            {ProtectedRoute.isAdmin===true ?
                            <div>
                                {/* <Link to ="/deleteOrganization"><button className="btn-primary px-3 m-5" type="button">Delete</button></Link> */}
                                <button className="btn-primary px-5 m-5"  type='button' onClick={(e)=>update(e,orgList)}>update</button>
                            </div>
                                :
                            <div>
                                <Link to="/empNavbar"><button className="btn-primary px-3 m-5" type="button">Back</button></Link>
                            </div>}
                            
                       
            </>
            )}
            </form>
        </div>
    </div>
)
}

export default OrganizationDetails;