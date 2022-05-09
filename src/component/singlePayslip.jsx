import React,{ useState,useEffect} from "react";
import {useNavigate,useLocation} from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import axios from "axios";

export default function SinglePayslip(){
    const [singlePayslip, setSinglePayslip] = useState();
    const [PDFPayslip, setPDFPayslip] = useState([]);
    const {state}=useLocation();
    console.log(state)
    const id = state._id
    const getSinglePayslip = async () => {
     axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/payslip/getSinglePaySlipDetails/'+id, 
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
               'url':'http://192.168.0.112:9022/HRMS/payslip/pdfCreater/'+id, 
           }).then((response) => {
               console.log(response)
             let res = response.data
             console.log(res.result.filename,"res")
             setPDFPayslip(res.result.filename)
           })
           .catch((error) =>{
               console.log(error)
           })
       }

      //  useEffect(() => {PayslipPDF();},[]);

    async function updatePayslip(e,payslip){
        console.log(payslip)
   navToUpdate('/updatePayslip',{state:payslip})
    }
  const navToUpdate = useNavigate()


    return(
        <div>
        <div>
           <div className="Bg pb-5">
           {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
            <div className="m-5 p-5 background">
          
               <>
        <div>
          <div class="title">
              <img src={state.companyLogo} alt="logo" width="150px" height="100px"/>
              <h3 class="payslipYellowtext A">
                  {state.companyName}
              </h3>
          </div>
          <table class="A4 mt-50px mb-25px ms-40px">
              <thead>
            <tr>
              <td>Employee ID</td>
              <td>{state.EmployeeDetails.identityNumber}</td>
              <td>Employee Name</td>
              <td>{state.EmployeeDetails.name}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{state.EmployeeDetails && <>{state.EmployeeDetails.designation.designationName}</>}</td>
              <td>Month and Year</td>
              <td>{state.monthAndYear}</td>
            </tr>
            <tr>
              <td>UAN</td>
              <td>{state.EmployeeDetails.bankDetails.uanNumber}</td>
              <td>Loss Of Pay Days </td>
              <td>{state.lopDays}</td>
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
              <td>{state.basicPay}</td>
              <td>Emplpoyee Share Of PF</td>
              <td>{state.employeeShareOfPF}</td>
            </tr>
            <tr>
              <td>HRA</td>
              <td>{state.HRA}</td>
              <td>Employee Share Of ESI </td>
              <td>{state.employeeShareOfESI}</td>
            </tr>
            <tr>
              <td>Medical Allowance</td>
              <td>{state.medicalAllowance}</td>
              <td>Employer Share Of PF </td>
              <td>{state.employerShareOfPF}</td>
            </tr>
            <tr>
              <td>ConveyanceAllowance</td>
              <td>{state.conveyanceAllowance}</td>
              <td>Employee Share Of ESI </td>
              <td>{state.employeeShareOfESI}</td>
            </tr>
            <tr>
              <td>City Compensatory Allowance</td>
              <td>{state.cityCompensatory}</td>
              <td>Leave Deductions </td>
              <td>{state.leaveDeductions}</td>
            </tr>
            <tr>
              <td>Other Allowance</td>
              <td>{state.otherAllowance}</td>
              <td>TDS</td>
              <td>{state.TDS}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Other Deduction</td>
              <td>{state.otherDeduction}</td>
            </tr>
            <tr>
              <td>Total Earning-CTC</td>
              <td>{(parseInt(state.basicPay)+parseInt(state.HRA)+parseInt(state.medicalAllowance)+parseInt(state.conveyanceAllowance)+parseInt(state.cityCompensatory)+parseInt(state.otherAllowance))}</td>
              <td>Total Deduction</td>
              <td>{(parseInt(state.employeeShareOfESI)+parseInt(state.employeeShareOfPF)+parseInt(state.leaveDeductions)+parseInt(state.otherDeduction)+parseInt(state.TDS))}</td>

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Net Take Home Salary</td>
              <td>{(parseInt(state.basicPay)+parseInt(state.HRA)+parseInt(state.medicalAllowance)+parseInt(state.conveyanceAllowance)+parseInt(state.cityCompensatory)+parseInt(state.otherAllowance))-(parseInt(state.employeeShareOfESI)+parseInt(state.employeeShareOfPF)+parseInt(state.leaveDeductions)+parseInt(state.otherDeduction)+parseInt(state.TDS))}</td>
            </tr>
            </tbody>
          </table>
        </div>
        </>
                {/* <img className=" m-2" src="x.companyLogo" alt="companyLogo" />

                <h5 className=" m-2" >Company Name : {state.companyName}</h5>  

                 <h5 className=" m-2" >Name : {state.EmployeeDetails.name}</h5>  
               
                 <h5 className=" m-2" >Identity Number : {state.EmployeeDetails.identityNumber}</h5> 
         
                 <h5 className=" m-2" >Designation : {state.EmployeeDetails.designation.designationName}</h5> 
           
                 <h5 className=" m-2" >Basic Pay : {state.basicPay}</h5> 
           
                 <h5 className=" m-2" >HRA : {state.HRA}</h5> 
            
                 <h5 className=" m-2" >TDS : {state.TDS}</h5> 
             
                 <h5 className=" m-2" >Allowance : {state.allowance}</h5>

                 <h5 className=" m-2" >City Compensatory : {state.cityCompensatory}</h5> 
           
                 <h5 className=" m-2" >Conveyance Allowance : {state.conveyanceAllowance}</h5> 
           
                 <h5 className=" m-2" >Employee Share Of ESI : {state.employeeShareOfESI}</h5> 

                 <h5 className="m-2">Employer Share Of ESI: {state.employerShareOfESI}</h5>

                <h5 className=" m-2" >Employee Share Of PF : {state.employeeShareOfPF}</h5> 

                <h5 className=" m-2" >Employer Share Of PF : {state.employerShareOfPF}</h5>     

                <h5 className="m-2" >medicalAllowance: {state.medicalAllowance}</h5> 

                <h5 className="m-2" >otherAllowance: {state.otherAllowance}</h5> 

                <h5 className="m-2" >leaveDeductions : {state.leaveDeductions}</h5>
             
                <h5 className="mb-5 m-2" > Total Salary : {(parseInt(state.basicPay)+parseInt(state.HRA)+parseInt(state.TDS)+parseInt(state.allowance)+parseInt(state.cityCompensatory)+parseInt(state.conveyanceAllowance)+parseInt(state.medicalAllowance)+parseInt(state.otherAllowance))-(parseInt(state.employeeShareOfESI)+parseInt(state.employerShareOfESI)+parseInt(state.employeeShareOfPF)+parseInt(state.employerShareOfPF)+parseInt(state.leaveDeductions))}</h5> 

                <div>
                    <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>updatePayslip(e,state)}>Update</button>
                <a href={'http://192.168.0.112:9022'+PDFPayslip} className="btn-primary px-3 py-1 m-5">Click to download</a>
                </div>
                </>
                 */}
                  <div>
                    <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>updatePayslip(e,state)}>Update</button>
                <a href={PDFPayslip} className="btn-primary px-3 py-1 m-5">Click to download</a>
               { console.log(PDFPayslip)}

                </div>
            </div>
            
        </div> 
        
        </div>
        </div>
    );
}