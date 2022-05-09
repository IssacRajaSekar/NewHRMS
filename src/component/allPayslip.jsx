import axios from "axios";
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function AllPayslip(){
    const [allPayslip, setAllPayslip] = useState([]);
    const getAllPayslip = async () => {
     axios({
            'method':'GET',
            'url':'http://192.168.0.112:9022/HRMS/payslip/getAllPayslipDetails', 
        }).then((response) => {
            console.log(response)
          let res = response.data
          console.log(res,"res")
          setAllPayslip(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {getAllPayslip();},[]);

    async function viewPayslip(e,payslip){
        console.log(payslip)
   navToUpdate('/singlePayslip',{state:payslip})
    }
  const navToUpdate = useNavigate()

    return(
        <div>
           <div className="Bg card pb-5 mt-5">
           
           {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
            <div className="m-5 p-5 background">      
             <h3 className="pb-5">PAYSLIP LIST</h3>
            {allPayslip.length == 0 ? <h5> No Data Found </h5>:
               allPayslip.length > 0 && allPayslip.map((x)=>
               
               <>
               {}

                {/* <img className=" m-2" src={x.companyLogo} alt="companyLogo" /> */}

                {/* <h5 className=" m-2" >Company Name : {x.companyName}</h5>   */}

                 <h5 className=" m-2" >Name : {x.EmployeeDetails.name}</h5>  
               
                 <h5 className=" m-2" >Identity Number : {x.EmployeeDetails.identityNumber}</h5> 
         
                 {x.EmployeeDetails.designation && <h5 className=" m-2" >Designation : {x.EmployeeDetails.designation.designationName}</h5>}

                 {/* <h5 className=" m-2" >Month and Year : {x.monthAndYear}</h5>  
           
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

                <h5 className="m-2" >Total Deductions : {}</h5>

                <h5 className="m-2" >Total Earning : {}</h5>
             
                <h5 className="mb-5 m-2" > Total Salary : {(parseInt(x.basicPay)+parseInt(x.HRA)+parseInt(x.TDS)+parseInt(x.allowance)+parseInt(x.cityCompensatory)+parseInt(x.conveyanceAllowance)+parseInt(x.medicalAllowance)+parseInt(x.otherAllowance))-(parseInt(x.employeeShareOfESI)+parseInt(x.employerShareOfESI)+parseInt(x.employeeShareOfPF)+parseInt(x.employerShareOfPF)+parseInt(x.leaveDeductions))}</h5>  */}

            <div>
                <button className="btn-primary px-3 m-5"  type='button' onClick={(e)=>viewPayslip(e,x)}>View</button>
            </div>

                </>
                
            
                )}
            </div>
            
        </div> 
        </div>
    );
}