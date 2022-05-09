import React,{ useState,useEffect} from "react";
import {useNavigate,useLocation} from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import axios from "axios";

export default function EmployeePayslip(){
    const [singlePayslip, setSinglePayslip] = useState([]);
    const [PDFPayslip, setPDFPayslip] = useState([]);
    const identityNumber = localStorage.getItem('identityNumber');
   
    // console.log(id)

    const getSinglePayslip = async () => {
     axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/payslip/getSinglePaySlipDetails/'+identityNumber
        }).then((response) => {
            console.log(response)
          let res = response.data
          console.log(res,"res")
          setSinglePayslip(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {getSinglePayslip();},[]);

    const PayslipPDF = async () => {
        axios({
               'method':'GET',
               'url':'http://192.168.0.112:9022/HRMS/payslip/pdfCreater/'+singlePayslip[0]._id, 
           }).then((response) => {
               console.log(response)
             let res = response.data
             console.log(res.result,"res")
             setPDFPayslip(res)
           })
           .catch((error) =>{
               console.log(error)
           })
       }

//        <p>Click on this to download it:<p>
// <a href="/images/myw3schoolsimage.jpg" download>
// </a>

    //    useEffect(() => {PayslipPDF();},[singlePayslip]);

//     async function updatePayslip(e,payslip){
//         console.log(payslip)
//    navToUpdate('/updatePayslip',{singlePayslip:payslip})
//     }
//   const navToUpdate = useNavigate()


    return(
        // <div>
        //     <div>
        //    <div className="Bg pb-5">
        //    {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
        //     <div className="m-5 p-5 background">
        //     {singlePayslip.length == 0 ? <h5> No Data Found </h5>:
        //     singlePayslip.length > 0 && singlePayslip.map((x) =>
          
        //        <>
                /* <img className=" m-2" src="x.companyLogo" alt="companyLogo" />

                <h5 className=" m-2" >Company Name : {x.companyName}</h5>  

                 {x.EmployeeDetails && <> <h5 className=" m-2" >Name : {x.EmployeeDetails.name}</h5> 
               
                 <h5 className=" m-2" >Identity Number : {x.EmployeeDetails.identityNumber}</h5> 
         
                 <h5 className=" m-2" >Designation : {x.EmployeeDetails.designation.designationName}</h5> </>}
           
                 <h5 className=" m-2" >Basic Pay : {x.basicPay}</h5> 
           
                 <h5 className=" m-2" >HRA : {x.HRA}</h5> 
            
                 <h5 className=" m-2" >TDS : {x.TDS}</h5> 
             
                 <h5 className=" m-2" >Allowance : {x.allowance}</h5>

                 <h5 className=" m-2" >City Compensatory : {x.cityCompensatory}</h5> 
           
                 <h5 className=" m-2" >Conveyance Allowance : {x.conveyanceAllowance}</h5> 
           
                 <h5 className=" m-2" >Employee Share Of ESI : {x.employeeShareOfESI}</h5> 

                 <h5 className="m-2">Employer Share Of ESI: {x.employerShareOfESI}</h5>

                <h5 className=" m-2" >Employee Share Of PF : {x.employeeShareOfPF}</h5> 

                <h5 className=" m-2" >Employer Share Of PF : {x.employerShareOfPF}</h5>     

                <h5 className="m-2" >medicalAllowance: {x.medicalAllowance}</h5> 

                <h5 className="m-2" >otherAllowance: {x.otherAllowance}</h5> 

                <h5 className="m-2" >leaveDeductions : {x.leaveDeductions}</h5>

                {/* {singlePayslip.data._id;}
              */
                /* <h5 className="mb-5 m-2" > Total Salary : {(parseInt(x.basicPay)+parseInt(x.HRA)+parseInt(x.TDS)+parseInt(x.allowance)+parseInt(x.cityCompensatory)+parseInt(x.conveyanceAllowance)+parseInt(x.medicalAllowance)+parseInt(x.otherAllowance))-(parseInt(x.employeeShareOfESI)+parseInt(x.employerShareOfESI)+parseInt(x.employeeShareOfPF)+parseInt(x.employerShareOfPF)+parseInt(x.leaveDeductions))}</h5> 

                
{console.log(PDFPayslip)}
                
                    {/* <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>updatePayslip(e,singlePayslip)}>Update</button> */
                    /* <a href={PDFPayslip}><h5 className="btn-dark px-3 m-5 ">Click to download</h5></a> */

    <div>
        <div>
           <div className="Bg pb-5">
           {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
           <div className="m-5 p-5 background">
             {singlePayslip.length == 0 ? <h5> No Data Found </h5>:
             singlePayslip.length > 0 && singlePayslip.map((x) =>
               <>
        <div>
          <div class="title">
              <img src={x.companyLogo} alt="logo" width="150px" height="100px"/>
              <h3 class="payslipYellowtext A">
                  {x.companyName}
              </h3>
          </div>
          <table class="A4 mt-50px mb-25px ms-40px">
              <thead>
            <tr>
              <td>Employee ID</td>
              <td>{x.EmployeeDetails.identityNumber}</td>
              <td>Employee Name</td>
              <td>{x.EmployeeDetails.name}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{x.EmployeeDetails && <>{x.EmployeeDetails.designation.designationName}</>}</td>
              <td>Month and Year</td>
              <td>{x.monthAndYear}</td>
            </tr>
            <tr>
              <td>UAN</td>
              <td>{x.EmployeeDetails.bankDetails.uanNumber}</td>
              <td>Loss Of Pay Days </td>
              <td>{x.lopDays}</td>
            </tr>
            </thead>
          </table>
          <br/>
          <table class="A4 w-180px mb-50px">
              
            <thead>
            <tr>
              <th>Earnings</th>
              <th>Amount</th>
              <th>Deduction</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Basic Pay</td>
              <td>{x.basicPay}</td>
              <td>Emplpoyee Share Of PF</td>
              <td>{x.employeeShareOfPF}</td>
            </tr>
            <tr>
              <td>HRA</td>
              <td>{x.HRA}</td>
              <td>Employee Share Of ESI </td>
              <td>{x.employeeShareOfESI}</td>
            </tr>
            <tr>
              <td>Medical Allowance</td>
              <td>{x.medicalAllowance}</td>
              <td>Employer Share Of PF </td>
              <td>{x.employerShareOfPF}</td>
            </tr>
            <tr>
              <td>ConveyanceAllowance</td>
              <td>{x.conveyanceAllowance}</td>
              <td>Employee Share Of ESI </td>
              <td>{x.employeeShareOfESI}</td>
            </tr>
            <tr>
              <td>City Compensatory Allowance</td>
              <td>{x.cityCompensatory}</td>
              <td>Leave Deductions </td>
              <td>{x.leaveDeductions}</td>
            </tr>
            <tr>
              <td>Other Allowance</td>
              <td>{x.otherAllowance}</td>
              <td>TDS</td>
              <td>{x.TDS}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Other Deduction</td>
              <td>{x.otherDeduction}</td>
            </tr>
            <tr>
              <td>Total Earning-CTC</td>
              <td>{(parseInt(x.basicPay)+parseInt(x.HRA)+parseInt(x.medicalAllowance)+parseInt(x.conveyanceAllowance)+parseInt(x.cityCompensatory)+parseInt(x.otherAllowance))}</td>
              <td>Total Deduction</td>
              <td>{(parseInt(x.employeeShareOfESI)+parseInt(x.employeeShareOfPF)+parseInt(x.leaveDeductions)+parseInt(x.otherDeduction)+parseInt(x.TDS))}</td>

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Net Take Home Salary</td>
              <td>{(parseInt(x.basicPay)+parseInt(x.HRA)+parseInt(x.medicalAllowance)+parseInt(x.conveyanceAllowance)+parseInt(x.cityCompensatory)+parseInt(x.otherAllowance))-(parseInt(x.employeeShareOfESI)+parseInt(x.employeeShareOfPF)+parseInt(x.leaveDeductions)+parseInt(x.otherDeduction)+parseInt(x.TDS))}</td>
            </tr>
            </tbody>
          </table>
        </div>
        </>
                
            )
                
     }
      </div>
            
        </div> 
        </div>
        </div>
    );
}