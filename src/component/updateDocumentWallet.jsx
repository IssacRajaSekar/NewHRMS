// import AdminNavbar from "./adminNavbar";
// import { useLocation,useNavigate} from "react-router-dom";
// import { useState } from "react";
// export default function UpdateDocumentWallet(){
//     const navAfterUpdate = useNavigate();
//     const {state} = useLocation();
//     const [identityNumber,setIdentityNumber] = useState();
//     console.log(state._id)
//     const UpdateDocWallet = async (e) => {
//         e.preventDefault();
//         const updateLeave ={sickLeave,casualLeave}
//     console.log(updateLeave)
//         let updateLeaveData = await fetch('http://192.168.0.112:9022/HRMS/documentwallet/updateDocumentWallet/'+state._id,{
//             method: 'PUT',
//             headers: {
//               'Content-type': 'application/JSON'
//             },
//             body: JSON.stringify(updateLeave)
//         })
//         updateLeaveData = await updateLeaveData.json()
//         navAfterUpdate('/organizationDetails')
//     }
//     return(
//         <div className="Bg mb-5">
//             <AdminNavbar/>
//             <div class="container my-5 py-5 ">
//             <form class="form-style text-align-center background" action="">
//             <div className="row">
//                     <div className="col-4"></div>
//                     <h3 className="col-6">Upload Documents</h3>
//             </div>
//             <div className="row p-2 m-2">
//                 <label className="col pe-5 me-5">Identity Number</label>
//                 <input className="pe-5 me-5 col-6 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="number" onChange={(e)=>setIdentityNumber(e.target.value)}  />
//             </div>
            
//             {certificate.length > 0 && certificate.map((x)=>
//             <>
//             <div className="row"> 
//             <iframe src={x} className="col-3" width="20%" height="200px"/>
//             <div className="col-2">{x}</div>
//             </div>
//             {/* <img src={x} className="img-fluid" style={{width:"200px",height:"200px"}}/> */}
//             <button type="button" className="col-1 m-3 px-2 btn btn-danger" onClick={(e)=>remove(e,x)}>remove</button><br></br>
//             </>
//             )}
//             {/* <div class="row p-2 m-2">
//                 <label class="col pe-5 me-5" for="image">Document Name</label>
//                 <input className="pe-5 me-5 col-6 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="text" onChange={(e)=>setCertificateName1(e.target.value)}/>
//             </div> */}
//             <div class="row p-2 m-2">
//                     <label class="col pe-5 me-5" for="image">Upload Document</label>
//                     <input className="pe-5 me-5 col-3 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="file" name="image" id="image" onChange={(e)=>setCertificate1(e.target.files[0])} />
//                     <input type="button" onClick={(e)=>addDoc(e)} className="pe-5 me-5 col-2 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" value="Add" />
//             </div>
//             <div className=" mt-4 row">
//                 <div className="col-5"></div>
//                 <input type="button" onClick={UpdateDocWallet} className="col-2 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" value="Submit" />
//             </div>
//             </form>
//             </div>
//         </div>
//         )
// }
import AdminNavbar from "./Navabar/adminNavbar";
import EmpNavbar from "./Navabar/empNavbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

export default function UpdateDocumentWallet(){
    const navToDocumentWallet = useNavigate()
    const {state} = useLocation();
    console.log(state)
    var [certificate,setCertificate]=useState(state.certificate);
    const [certificate1,setCertificate1]=useState();
    const[final,setFinal]=useState([]);
    const [identityNumber,setIdentityNumber] = useState();
    
    const updateDocWallet = async () => {
        const allDoc = {certificate}
        console.log(state._id);
        // console.log(allDoc)
        // console.log(JSON.stringify(allDoc))
        await fetch('http://192.168.0.112:9022/HRMS/documentwallet/updateDocumentWallet/'+state._id,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/JSON'
            },
            body: JSON.stringify({certificate})
        })
.then((resp)=>{
   return resp.json()
   
    // setCertificate(resp.certificate);
    // console.log(profileImage);
} ).then((response)=>{console.log(response);navToDocumentWallet('/documentsWallet')})
.catch((error)=>{
    console.log(error)
})
}

// let updateDocWallet = updateDocWallet.json()

const addDoc = async(e) =>{
    e.preventDefault();
    const formdata1 = new FormData();
    formdata1.append('certificate',certificate1);
    // formdata1.append('certificateName',certificateName1);
    await fetch('http://192.168.0.112:9022/HRMS/documentwallet/certificate',{
    method: 'POST',
    body:formdata1
    }).then((response)=>{
        console.log(response)
        return response.json()
    }).then((resp)=>{
        console.log(resp)
        const doc=resp.data.certificate
        console.log(resp.data.certificate);
        // const doc={certificate}
        setCertificate([...certificate,doc])
    //    console.log(image)
        // setFinal([...final,doc])
        // setCertificate(doc)
        // console.log(doc);
    })
    .catch((error)=>{
        console.log(error)
    })
    // final.push(obj)
    // console.log(final)
}
function remove(e,single){
    console.log(single);
    const value=certificate.filter((y)=>y!==single)
    setCertificate(value)
    // console.log(typeof(state.certificate))
// console.log(Object.values(state.certificate).length);

    //  const k = (Object.values(state.certificate).filter((y)=>y!==single))

    //  console.log(k);

    //  console.log(Object.values(state.certificate).length)
// certificate = k
// console.log(certificate.length);
// console.log(certificate);

//      setCertificate([...certificate])
}

    // const value=state.certificate
    
    // .filter((y)=>y!=single)
    // setCertificate(value)

    return(
        <div className="Bg mb-5">
              {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
            <div class="container my-5 py-5 ">
            <form class="form-style text-align-center background" action="">
            <div className="row">
                    <div className="col-4"></div>
                    <h3 className="col-6">Upload Documents</h3>
            </div>
            <div className="row p-2 m-2">
                <label className="col pe-5 me-5">Identity Number</label>
                <label className="col pe-5 me-5 mb-5">{state.employeeDetails.identityNumber}</label>
            </div>
            
            {certificate.length > 0 && certificate.map((x)=>
            <>
            <div className="row"> 
            <iframe src={x} className="col-3" width="20%" height="200px"/>
            <div className="col-2">{x}</div>
            </div>
   
            {/* <img src={x} className="img-fluid" style={{width:"200px",height:"200px"}}/> */}
          
            
            <button type="button" className="col-1 m-3 px-2 btn btn-danger" onClick={(e)=>remove(e,x)}>remove</button><br></br>
            </>)}
            
            {/* <div class="row p-2 m-2">
                <label class="col pe-5 me-5" for="image">Document Name</label>
                <input className="pe-5 me-5 col-6 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="text" onChange={(e)=>setCertificateName1(e.target.value)}/>
            </div> */}
            <div class="row p-2 m-2">
                    <label class="col pe-5 me-5" for="image">Upload Document</label>
                    <input className="pe-5 me-5 col-3 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="file" name="image" id="image" onChange={(e)=>setCertificate1(e.target.files[0])} />
                    <input type="button" onClick={(e)=>addDoc(e)} className="pe-5 me-5 col-2 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" value="Add" />
            </div>
            <div className=" mt-4 row">
                <div className="col-5"></div>
                <input type="button" onClick={(e)=>updateDocWallet(e)} className="col-2 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" value="Submit" />
            </div>
            </form>
            </div>
        </div>
    )
}