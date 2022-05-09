import React,{ useState} from "react";
import {useNavigate,useLocation} from "react-router-dom";
import AdminNavbar from '../Navabar/adminNavbar';
import EmpNavbar from '../Navabar/empNavbar';

export default function UpdateEmpProfile() {
    const updateEmpProfile = useNavigate()
    const {state}=useLocation();
    console.log(state._id)
    console.log(state)
    const [profileImage,setProfileImage]=useState();
    const [profileImage1,setProfileImage1]=useState([]);
    const [name,setName]=useState(state.name);
    const [email,setEmail]=useState(state.email);
    const [contact,setContactNumber]=useState(state.contact);
    const [designationName,setDesignationName]=useState(state.designation.designationName);
    const [identityNumber,setIdentityNumber]=useState(state.identityNumber); 
    const [gender,setGender]=useState(state.gender);
    const [dateOfJoining,setDateOfJoining]=useState(state.dateOfJoining);
    const [yearsOfExperience,setYearsOfExperience]=useState(state.yearsOfExperience);
    const [teamLeader,setTeamLeader]=useState(state.designation.teamLeader);
    const [projectManager,setProjectManager]=useState(state.designation.projectManager);
    const [dateOfBirth,setDateOfBirth]=useState(state.dateOfBirth);
    const [bloodGroup,setBloodGroup]=useState(state.bloodGroup);
    const [address,setAddress]=useState(state.address);
    const [uploadDocument,setUploadDocument]=useState();
    const [uploadDocument1,setUploadDocument1]=useState([]);
    const UpdateEmployeeProfile = async (e) => {
        e.preventDefault();
        const updateEmpData ={profileImage,name,email,contact,designationName,identityNumber,gender,dateOfJoining,yearsOfExperience,teamLeader,projectManager,dateOfBirth,bloodGroup,address,uploadDocument}
    console.log(updateEmpData)
        let updateEmployeeData= await fetch('http://192.168.0.112:9022/HRMS/employee/updateEmployee/'+state._id,{
            method: 'PUT',
            headers: {
              'Content-type': 'application/JSON'
            },
            body: JSON.stringify(updateEmpData)
        }).then((response)=>{
            console.log(response)
           updateEmpProfile('/employees_list')
        }).catch((error)=>{
            console.log(error)
        })
        updateEmployeeData = await updateEmployeeData.json()
        console.log(updateEmployeeData)
    }
    async function UploadImage() {
        const formdata1=new FormData()
        formdata1.append('image',profileImage1)
        await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
        method: 'POST',
        body:formdata1
    }).then((response)=>{
        console.log(response)
        return response.json()
    }).then((resp)=>{console.log(resp.data.image);setProfileImage(resp.data.image); console.log(profileImage);} )
    .catch((error)=>{
        console.log(error)
    })
}

async function UploadDocument() {
    const formdata2=new FormData()
    formdata2.append('image',uploadDocument1)
    await fetch('http://192.168.0.112:9022/HRMS/employee/image',{
    method: 'POST',
    body:formdata2
}).then((response)=>{
    console.log(response)
    return response.json()
}).then((resp)=>{console.log(resp);setUploadDocument(resp.data.image); console.log(profileImage);} )
.catch((error)=>{
    console.log(error)
})
}

   
    return(
    <div className="Bg mb-5 ">
       {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
    <div class=" background container my-5 py-5 ">
                <form class="form-style text-align-center" action="">
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="image">Profile Image</label>
                        <input className="pe-5 me-5 col-3 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="file" name="image" id="image" onChange={(e)=>setProfileImage1(e.target.files[0])} />
                        <input type="button" onClick={UploadImage} className="pe-5 me-5 col-1 px-1 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" value="Upload" />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="name">Name</label>
                        <input class="col pe-5 me-5" type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="email">E-Mail</label>
                        <input class="col pe-5 me-5" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="mobNumber">Mobile Number</label>
                        <input class="col pe-5 me-5" type="number" name="mobNumber" id="mobNumber" value={contact} onChange={(e)=>setContactNumber(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="designation">Designation</label>
                        <input class="col pe-5 me-5" type="text" name="designation" id="designation" value={designationName} onChange={(e)=>setDesignationName(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="id.no">Identity Number</label>
                        <input class="col pe-5 me-5" type="number" name="id.no" id="id.no" value={identityNumber} onChange={(e)=>setIdentityNumber(e.target.value)}/>
                    </div>
                    <div className="row">
                        <div className="col-5 mx-5"><label htmlFor="gender">Select Gender</label></div>
                        <select className="pe-5 me-5 col-4 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant"  aria-label="Default select example" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                        </select>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="dateOfJoining">Date of Joining</label>
                        <input class="col pe-5 me-5" type="date" name="dateOfJoining" id="dateOfJoining" value={dateOfJoining} onChange={(e)=>setDateOfJoining(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="experience">Years of Experience</label>
                        <input class="col pe-5 me-5" type="number" name="experience" id="experience" value={yearsOfExperience} onChange={(e)=>setYearsOfExperience(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="teamLeader">Team Leader</label>
                        <input class="col pe-5 me-5" type="text" name="teamLeader" id="teamLeader" value={teamLeader} onChange={(e)=>setTeamLeader(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="projectManager">Project Manager</label>
                        <input class="col pe-5 me-5" type="text" name="projectManager" id="projectManager" value={projectManager} onChange={(e)=>setProjectManager(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="dateOfBirth">Date of birth</label>
                        <input class="col pe-5 me-5" type="date" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="bloodGroup">Blood Group</label>
                        <input class="col pe-5 me-5" type="text" name="bloodGroup" id="bloodGroup" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="address">Address</label>
                        <textarea class="col pe-5 me-5" name="address" id="address" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="documents">Upload Resume</label>
                        <input className="pe-5 me-5 col-3 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="file" name="" id="" onChange={(e)=>setUploadDocument1(e.target.files[0])}/>
                        <input type="button" onClick={UploadDocument} className="pe-5 me-5 col-1 px-1 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant"value="Upload" />
                    </div>
                    <div className="d-grid mt-4">
                        <input type="button" onClick={UpdateEmployeeProfile} className=" mx-2 px-5 btn btn-light innerShadow border-1 py-2 my-4 no-borderRadiusImportant" value="Submit" />
                    </div>
                </form>
            </div>
    </div> 
    );
}