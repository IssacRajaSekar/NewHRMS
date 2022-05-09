import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import { useNavigate } from "react-router-dom";

export default function EmpDocumentWallet(){
    const navToUpdateDocument = useNavigate();
    const [documents,setDocuments] = useState({});
    const token = localStorage.getItem('token')
    const identityNumber = localStorage.getItem('identityNumber')
    console.log(identityNumber)
    // console.log(employeesListData)
    const documentWalletList = async () => {
        axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/documentwallet/getSingleDocumentWallet/'+identityNumber
        })
        .then((response) =>{
            console.log(response)
            setDocuments(response.data.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {documentWalletList();},[]);

    function UpdateDoc(e,x){
        navToUpdateDocument('/updateDocumentWallet',{state:x})
    }

    function remove(e,single){
        const value=documents.filter((y)=>y!=single)
        setDocuments(value)
    }

    async function deleteDoc(e,docID){
        console.log(docID)
      navToDelete('/deleteDocument',{state:docID})
    }
  const navToDelete = useNavigate()

    return(
        <div className="Bg">
         {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
      <div className="container">
      <div class="card m-5 p-5 row background">
          <div className="row">
                        <div className="col-5"></div>
          <h3 className="col-6">DOCUMENT WALLET</h3>
          </div>
      {documents.length == 0 ? <h5> No Data Found </h5>:
        documents.length > 0 && documents.map((x) =>  
        <>
        {/* {console.log(x)} */}
        <div className="row mb-5 pb-5"> 
            {x.employeeDetails && <><h5 className=" m-2" >Name : {x.employeeDetails.name}</h5>

            <h5 className=" m-2 " >Identity Number : {x.employeeDetails.identityNumber}</h5></>} 
    
            {x.employeeDetails && x.employeeDetails.designation && <> <h5 className=" m-2" >Designation : {x.employeeDetails.designation.designationName}</h5></>} 
              
            {x.certificate.length>0 && x.certificate.map((y)=>
            <>
            <iframe src={y} className="col-3" width="20%" height="200px"/>

            </>
            )}

            <div className="mb-1 pb-1">
            
            <button className="col-1 btn btn-primary btn-sm px-1 m-5 mb-1 pb-1"  type='button' onClick={(e)=>UpdateDoc(e,x)}>Update Documents</button>
            
            </div>
            
        </div>  
           

            
            
        </>
         )}
        </div>
      </div>
    </div>
    )
}