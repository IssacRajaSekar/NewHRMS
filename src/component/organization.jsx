import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function Organization(){
    const [officeImage,setOfficeImage]=useState();
    const [officeImage1,setOfficeImage1]=useState();
    const [companyLogo,setCompanyLogo]=useState();
    const [companyLogo1,setCompanyLogo1]=useState();
    const [companyName,setCompanyName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [contact,setContactNumber]=useState();
    const [websiteLink,setWebsiteLink]=useState();
    const [about,setAbout]=useState(); 
    const [CEO,setCEO]=useState();
    const [founders,setFounder]=useState();
    const [foundedOn,setFoundedOn]=useState();
    const [headQuarters,setHeadquarters]=useState();
    const [revenue,setRevenue]=useState();
    const [numberOfEmployees,setNumberOfEmployees]=useState();
    const [achievementDocuments,setAchievementDocuments]=useState();
    const [achievementDocuments1,setAchievementDocuments1]=useState();
    const [subsidiaries,setSubsidiaries]=useState();
    const token = localStorage.getItem('token')
    const navToOrganization = useNavigate()
    const createOrganization = async (e) => {
        e.preventDefault();
    const orgData = {achievementDocuments,companyName,companyLogo,websiteLink,numberOfEmployees,CEO,officeImage,email,password,contact,about,founders,foundedOn,headQuarters,revenue,subsidiaries}
        let createOrganization = await fetch('http://192.168.0.112:9022/HRMS/organization/createOrganization',{
            method: 'POST',
            headers:{
                'Content-type': 'application/JSON' 
            },
            body:JSON.stringify(orgData)
        })
        const createOrganizationeData = await createOrganization.json()
        console.log(createOrganizationeData)
        // if(createOrganizationeData){

        // }
    }
    async function createOrganizationeImg() {
            const formdata1=new FormData()
            formdata1.append('image',officeImage1)
            await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
            method: 'POST',
            body:formdata1
        }).then((response)=>{
            console.log(response)
            return response.json()
            
        }).then((resp)=>{console.log(resp.data.image);setOfficeImage(resp.data.image); console.log(officeImage);} )
        .catch((error)=>{
            console.log(error)
        })
    }

    async function companyLogoUpload() {
        const formdata1=new FormData()
        formdata1.append('image',companyLogo1)
        await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
        method: 'POST',
        body:formdata1
    }).then((response)=>{
        console.log(response)
        return response.json()
    }).then((resp)=>{console.log(resp);setCompanyLogo(resp.data.image); console.log(companyLogo1);} )
    .catch((error)=>{
        console.log(error)
    })
    }
    async function achievementDocument() {
        const formdata1=new FormData()
        formdata1.append('image',achievementDocuments1)
        await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
        method: 'POST',
        body:formdata1
    }).then((response)=>{
        console.log(response)
        return response.json()
    }).then((resp)=>{console.log(resp);setAchievementDocuments(resp.data.image); console.log(companyLogo1);} )
    .catch((error)=>{
        console.log(error)
    })
    }
    // if (token) {
    // navToOrganization("/organizationDetails")
    // }
    // else {
    //     navToOrganization("/organization")
    //   }
    return(
    <div className="Bg mb-5 ">
      {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
    <div class="container background my-5 py-5">
    <form class="form-style text-align-center" action="">
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Office Images</label>
            <input class="col pe-5 me-5" type="file" name="image" id="image" onChange={(e)=>setOfficeImage1(e.target.files[0])}/>
            <input type="button" onClick={createOrganizationeImg} className="col-1 btn btn-sm btn-primary" value="Upload" />
        </div>
        <div class="row p-2 m-2">
                <label class="col pe-5 me-5" for="companyLogo">Company logo</label>
                <input class="col pe-5 me-5" type="file" name="companyLogo" id="companyLogo" onChange={(e)=>setCompanyLogo1(e.target.files[0])} />
                <input type="button" onClick={companyLogoUpload} className="col-1 btn btn-sm btn-primary" value="Upload" />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Company Name</label>
            <input class="col pe-5 me-5" type="text" name="companyName" id="companyName" onChange={(e)=>setCompanyName(e.target.value)} />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">E-Mail ID</label>
            <input class="col pe-5 me-5" type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Password</label>
            <input class="col pe-5 me-5" type="text" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Contact Number</label>
            <input class="col pe-5 me-5" type="tel" name="contactNumber" id="contactNumber" onChange={(e)=>setContactNumber(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Web Site Link </label>
            <input class="col pe-5 me-5" type="url" name="websiteLink" id="websiteLink" onChange={(e)=>setWebsiteLink(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >About</label>
            <textarea class="col pe-5 me-5" name="about" id="about" cols="30" rows="10" onChange={(e)=>setAbout(e.target.value)}></textarea>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >CEO</label>
            <input class="col pe-5 me-5" type="text" name="ceo" id="ceo" onChange={(e)=>setCEO(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Founder</label>
            <input class="col pe-5 me-5" type="text" name="founder" id="founder" onChange={(e)=>setFounder(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Founded On</label>
            <input class="col pe-5 me-5" type="text" name="foundedOn" id="foundedOn" onChange={(e)=>setFoundedOn(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Headquarters</label>
            <input class="col pe-5 me-5" type="text" name="headquarters" id="headquarters" onChange={(e)=>setHeadquarters(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Revenue</label>
            <input class="col pe-5 me-5" type="text" name="revenue" id="revenue" onChange={(e)=>setRevenue(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Number of Employees</label>
            <input class="col pe-5 me-5" type="text" name="numberOfEmployees" id="numberOfEmployees" onChange={(e)=>setNumberOfEmployees(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
                <label class="col pe-5 me-5" for="achievementDocuments">Achievement Documents</label>
                <input class="col pe-5 me-5" type="file" name="achievementDocuments" id="achievementDocuments" onChange={(e)=>setAchievementDocuments1(e.target.files[0])} />
                <input type="button" onClick={achievementDocument} className="col-1 btn btn-sm btn-primary" value="Upload" />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Subsidiaries</label>
            <input class="col pe-5 me-5" type="text" name="" id="" onChange={(e)=>setSubsidiaries(e.target.value)}/>
        </div>
        <div className="d-grid m-4">
            <input type="button" onClick={createOrganization} className="btn btn-lg btn-primary" value="Submit" />
        </div>
     </form>
    </div>
    </div> 
    );
}