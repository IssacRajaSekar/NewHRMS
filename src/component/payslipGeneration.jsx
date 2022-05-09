import { useState,useEffect } from "react";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';
import axios from "axios";

export default function GeneratedPaysllip(){
    const [viewPayslip, setViewPayslip] = useState();

    const generatedPayslip = async() =>{
        axios({
            'method':'GET',
            'url':' http://192.168.0.112:9022/HRMS/payslip/getAllUpdatedPaySlipDetails'  
        })
        .then((responce) => {
            console.log(responce.data.data)
            setViewPayslip(responce.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    } 
    
    useEffect(() =>  {
        generatedPayslip();
    }, []);
    

    return(
    <div className="Bg">
           {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
      <div className="container">
      <div class="background card m-5 p-5 row">
      {viewPayslip.length == 0 ? <h5> No Data Found </h5>:
        viewPayslip.length > 0 && viewPayslip.map((x) =>
        <>
        <form class="form-style text-align-center background" action="">
                    <div className="row">
                        <div className="col-4"></div>
                        <h3 className="col-6">Payslips</h3>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="id">Identity Number</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.EmployeeDetails.identityNumber}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="basicPay">Basic Pay</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.basicPay}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="monthAndYear">Month and Year</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.monthAndYear}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employeeShareOfPF">Employee Share Of PF</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.employeeShareOfPF}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for= "HRA">HRA</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.HRA}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employeeShareOfESI">Employee Share Of ESI</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.employeeShareOfESI}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="medicalAllowance">Medical Allowance</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.medicalAllowance}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employerShareOfPF">Employer Share Of PF</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.employerShareOfPF}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="conveyanceAllowance">Conveyance Allowance</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.conveyanceAllowance}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employerShareOfESI">Employer Share Of ESI</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.employerShareOfESI}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="cityCompensatory">City Compensatory</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.cityCompensatory}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="otherAllowance">Other Allowance</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.otherAllowance}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="allowance">Allowance</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.allowance}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="leaveDeductions">Leave Deductions</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.leaveDeductions}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="TDS">TDS</label>
                        <label class="col pe-5 me-5" name="id" id="id">{x.TDS}</label>
                    </div>
                    <div>
                        <label class="col pe-5 me-5" for="TDS">Total Deductions :</label>
                        <label class="col pe-5 me-5" name="id" id="id">{}</label>
                    </div>
                    <div>
                        <label class="col pe-5 me-5" for="TDS">Total Deductions :</label>
                        <label class="col pe-5 me-5" name="id" id="id">{}</label>
                    </div>

                 
                </form>
        </>
        )}
          </div>
          </div>
          </div>
    
    );
}