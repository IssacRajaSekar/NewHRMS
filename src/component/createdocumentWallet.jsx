import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isExists } from "date-fns";
import pLA from './UI/Assets/Oraganization details/modern-business-building-with-glass-wall-from-empty-floor.jpg';

export default function CreateDocumentWallet(){
    const navToDocumentWallet = useNavigate()
    const [certificate,setCertificate]=useState([]);
    const [certificate1,setCertificate1]=useState();
    // const [certificateName1,setCertificateName1]=useState([]);
    // const [certificateName,setCertificateName] = useState();
    const[final,setFinal]=useState([]);
    const [identityNumber,setIdentityNumber] = useState();
    // const certificate=final
    const allDoc = {certificate,identityNumber}
    const createDocWallet = async () => {
        console.log(allDoc)
        // console.log(JSON.stringify(allDoc))
    await axios({
        'method': 'POST',
        'url':'http://192.168.0.112:9022/HRMS/documentwallet/createDocumentWallet',
        'data': {allDoc}
// }).then((response)=>{
//     console.log(response)
//     return response.json()
}).then((resp)=>{
    console.log(resp);
    setCertificate(resp);
    // navToDocumentWallet("/documentsWallet")
    // console.log(profileImage);
} )
.catch((error)=>{
    console.log(error)
    })
}
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
    const value=certificate.filter((y)=>y!=single)
    setCertificate(value)
}
    return(
        <div>
        {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
     <div className="homeFlex">
     <img src={pLA} width='2000px'height='900px' alt="" />
     <div className='row'>
<div className='col-1'></div>
         <div className="Bg card col-11">
             <h3 className='text-white' style={{marginTop:'200px',marginBottom:'20px',paddingInline:'240px',backgroundColor:'#0000FF',color:'white'}}>CREATE DOCUMENT WALLET</h3>
         <div class="container background">
             <form class="ps-5 pe-4 form-style text-align-center " action="">
             <div class=" p-2 m-2">
            <div className="row p-1 m-1">
            <div className='row me-5 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                <label className='col-6'>Identity Number</label>
                <input className='col-6 pe-5' type="number" onChange={(e)=>setIdentityNumber(e.target.value)}  />
            </div>
            </div>
            {certificate.length > 0 && certificate.map((x)=>
            <>
            <div className="row"> 
            <iframe src={x} className="col-3" width="20%" height="200px"/>
            <div className="col-2">{x}</div>
            </div>
        
            {/* <img src={x} className="img-fluid" style={{width:"200px",height:"200px"}}/> */}
            <button type="button" className="col-1 m-3 px-2 btn btn-danger" onClick={(e)=>remove(e,x)}>remove</button><br></br>
            </>
            )}
            {/* <div class="row p-2 m-2">
                <label class="col pe-5 me-5" for="image">Document Name</label>
                <input className="pe-5 me-5 col-6 btn btn-light innerShadow border-1 py-1 my-1 no-borderRadiusImportant" type="text" onChange={(e)=>setCertificateName1(e.target.value)}/>
            </div> */}
            <div className='row me-3 mt-2 pt-1 pb-1 mb-5 mt-3' style={{backgroundColor:'#0000FF',color:'white'}}>
                    <label className="col-6" for="image">Upload Document</label>
                    <input className="col-4" type="file" name="image" id="image" onChange={(e)=>setCertificate1(e.target.files[0])} />
                    <input type="button" onClick={(e)=>addDoc(e)} className="col-2 sButPad  fw-bolder" value="Add" />
            </div>
            <div class="row px-5 mx-5 my-3">
                <div className='col-4 me-2'></div>
                <input  type="submit" value="Submit" onClick={createDocWallet} className=" px-1 col-3 btn btn-light butPad border-1 py-1 my-1 " />
                </div>
            </div>
            </form>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}