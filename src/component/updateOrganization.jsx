import React,{ useState,useEffect  } from "react";
import {useNavigate,useLocation} from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function UpdateOrganization() {
    const updateOrgDetails = useNavigate()
    const {state}=useLocation();
    console.log(state)
    const [officeImage,setOfficeImage]=useState();
    const [officeImage1,setOfficeImage1]=useState([]);
    const [companyName,setCompanyName]=useState(state.companyName);
    const [email,setEmail]=useState(state.email);
    const [contact,setContactNumber]=useState(state.contact);
    const [websiteLink,setWebsiteLink]=useState(state.websiteLink);
    const [about,setAbout]=useState(state.about); 
    const [CEO,setCEO]=useState(state.CEO);
    const [founders,setFounder]=useState(state.founders);
    const [foundedOn,setFoundedOn]=useState(state.foundedOn);
    const [headQuarters,setHeadquarters]=useState(state.headQuarters);
    const [revenue,setRevenue]=useState(state.revenue);
    const [numberOfEmployees,setNumberOfEmployees]=useState(state.numberOfEmployees);
    const [subsidiaries,setSubsidiaries]=useState(state.subsidiaries);
    const UpdateOrganization = async (e) => {
        e.preventDefault();
        const updateData ={companyName,websiteLink,numberOfEmployees,CEO,officeImage,email,contact,about,founders,foundedOn,headQuarters,revenue,numberOfEmployees,subsidiaries}
    const id = localStorage.getItem('ID')
    console.log(updateData)
        let updateOrganizationData = await fetch('http://192.168.0.112:9022/HRMS/organization/updateOrganization/'+state._id,{
            method: 'PUT',
            headers: {
              'Content-type': 'application/JSON'
            },
            body: JSON.stringify(updateData)
        })
        updateOrganizationData = await updateOrganizationData.json()
        console.log(updateOrganizationData)
        updateOrgDetails('/organizationDetails')
    }
    async function UploadImage() {
        const formdata1=new FormData()
        console.log(officeImage1)
        formdata1.append('image',officeImage1)
        await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
        method: 'POST',
        body:formdata1
    }).then((response)=>{
        console.log(response)
        return response.json()
    }).then((resp)=>{console.log(resp);
        setOfficeImage(resp.data.image); 
        console.log(officeImage);} )
    .catch((error)=>{
        console.log(error)
    })
}
    return(
    <div className="mb-5 ">
      {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
    <div class="m-5 p-5 background">
    <form class="form-style text-align-center" action="">
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Office Images</label>
            <input class="col pe-5 me-5" type="file" name="image" id="image" onChange={(e)=>setOfficeImage1(e.target.files[0])}/>
            <input type="button" onClick={UploadImage} className="col-1 btn btn-sm btn-primary" value="Submit" />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Company Name</label>
            <input class="col pe-5 me-5" type="text" name="companyName" id="companyName" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">E-Mail ID</label>
            <input class="col pe-5 me-5" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Contact Number</label>
            <input class="col pe-5 me-5" type="number" name="contactNumber" id="contactNumber" value={contact} onChange={(e)=>setContactNumber(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Web Site Link </label>
            <input class="col pe-5 me-5" type="text" name="websiteLink" id="websiteLink" value={websiteLink} onChange={(e)=>setWebsiteLink(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >About</label>
            <textarea class="col pe-5 me-5" name="about" id="about" cols="30" rows="10" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >CEO</label>
            <input class="col pe-5 me-5" type="text" name="ceo" id="ceo" value={CEO} onChange={(e)=>setCEO(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Founder</label>
            <input class="col pe-5 me-5" type="text" name="founder" id="founder" value={founders} onChange={(e)=>setFounder(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5" >Founded On</label>
            <input class="col pe-5 me-5" type="text" name="foundedOn" id="foundedOn" value={foundedOn} onChange={(e)=>setFoundedOn(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Headquarters</label>
            <input class="col pe-5 me-5" type="text" name="headquarters" id="headquarters" value={headQuarters} onChange={(e)=>setHeadquarters(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Revenue</label>
            <input class="col pe-5 me-5" type="text" name="revenue" id="revenue" value={revenue} onChange={(e)=>setRevenue(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Number of Employees</label>
            <input class="col pe-5 me-5" type="text" name="numberOfEmployees" id="numberOfEmployees" value={numberOfEmployees} onChange={(e)=>setNumberOfEmployees(e.target.value)}/>
        </div>
        <div class="row p-2 m-2">
            <label class="col pe-5 me-5">Subsidiaries</label>
            <input class="col pe-5 me-5" type="text" name="" id="" value={subsidiaries} onChange={(e)=>setSubsidiaries(e.target.value)}/>
        </div>
        <div className="d-grid m-4">
            <input type="button" onClick={UpdateOrganization} className="btn btn-lg btn-primary" value="Submit" />
        </div>
     </form>
    </div>
    </div> 
    );
}