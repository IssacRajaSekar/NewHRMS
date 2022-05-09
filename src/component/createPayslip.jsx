import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';

export default function CreatePayslip(){
    const navigate2 = useNavigate();
    const [identityNumber,setIdentityNumber] = useState();
    const [basicPay,setBasicPay] = useState();
    const [employeeShareOfPF, setEmployeeShareOfPF] = useState();
    const [HRA,setHRA] = useState();
    const [employeeShareOfESI,setEmployeeShareOfESI] = useState();
    const [medicalAllowance,setMedicalAllowance] = useState();
    const [employerShareOfPF,setEmployerShareOfPF] = useState();
    const [conveyanceAllowance,setConveyanceAllowance] = useState();
    const [employerShareOfESI,setEmployerShareOfESI] = useState();
    const [cityCompensatory,setCityCompensatory] =useState();
    const [allowance, setAllowance] = useState();
    const [lossOfPay,setLeaveDeductions] = useState();
    const [otherAllowance,setOtherAllowance] = useState();
    const [otherDeduction,setOtherDeduction] = useState();
    const [TDS,setTDS] = useState();
    const [monthAndYear, setMonthAndYear] = useState();
    const createPayslip = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        const payslipDetails = {identityNumber,otherDeduction,monthAndYear,basicPay,employeeShareOfPF,lossOfPay,HRA,employeeShareOfESI,medicalAllowance,employerShareOfPF,conveyanceAllowance,employerShareOfESI,cityCompensatory,otherAllowance,allowance,TDS}
        const newEmployee = await fetch('http://192.168.0.112:9022/HRMS/payslip/createPayslip',{
          method: 'POST',
          headers: {            
              'Authorization': token
          },
          body: JSON.stringify(payslipDetails)
      })
if(token)
  {
    navigate2("/allPayslip")
  }
console.log(payslipDetails)
    }
    return(
        <div>
            <div className="Bg mb-5">
            {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
            <div class="container my-5 py-5 ">
                <form class="form-style text-align-center background" action="">
                    <div className="row">
                        <div className="col-4"></div>
                        <h3 className="col-6">CREATE PAYSLIP</h3>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="id">Identity Number</label>
                        <input class="col pe-5 me-5" type="number" name="id" id="id" onChange={(e)=>setIdentityNumber(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="basicPay">Month and Year</label>
                        <input class="col pe-5 me-5" type="month" name="basicPay" id="basicPay"onChange={(e)=>setMonthAndYear(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="basicPay">Basic Pay</label>
                        <input class="col pe-5 me-5" type="text" name="basicPay" id="basicPay"onChange={(e)=>setBasicPay(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employeeShareOfPF">Employee Share Of PF</label>
                        <input class="col pe-5 me-5" type="tel" name="employeeShareOfPF" id="employeeShareOfPF"onChange={(e)=>setEmployeeShareOfPF(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for= "HRA">HRA</label>
                        <input class="col pe-5 me-5" type="text" name= "HRA" id= "HRA" onChange={(e)=>setHRA(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employeeShareOfESI">Employee Share Of ESI</label>
                        <input class="col pe-5 me-5" type="text" name="employeeShareOfESI" id="employeeShareOfESI" onChange={(e)=>setEmployeeShareOfESI(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="medicalAllowance">Medical Allowance</label>
                        <input class="col pe-5 me-5" type="text" name="medicalAllowance" id="medicalAllowance" onChange={(e)=>setMedicalAllowance(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employerShareOfPF">Employer Share Of PF</label>
                        <input class="col pe-5 me-5" type="text" name="employerShareOfPF" id="employerShareOfPF" onChange={(e)=>setEmployerShareOfPF(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="conveyanceAllowance">Conveyance Allowance</label>
                        <input class="col pe-5 me-5" type="text" name="conveyanceAllowance" id="conveyanceAllowance" onChange={(e)=>setConveyanceAllowance(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employerShareOfESI">Employer Share Of ESI</label>
                        <input class="col pe-5 me-5" type="text" name="employerShareOfESI" id="employerShareOfESI" onChange={(e)=>setEmployerShareOfESI(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="cityCompensatory">City Compensatory</label>
                        <input class="col pe-5 me-5" type="text" name="cityCompensatory" id="cityCompensatory" onChange={(e)=>setCityCompensatory(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="otherAllowance">Other Allowance</label>
                        <input class="col pe-5 me-5" type="text" name="otherAllowance" id="otherAllowance" onChange={(e)=>setOtherAllowance(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="allowance">Allowance</label>
                        <input class="col pe-5 me-5" name="allowance" type="text" id="allowance" onChange={(e)=>setAllowance(e.target.value)}></input>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="leaveDeductions">Leave Deductions</label>
                        <input class="col pe-5 me-5" type="text" name="leaveDeductions" id="leaveDeductions" onChange={(e)=>setLeaveDeductions(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="leaveDeductions">Other Deduction</label>
                        <input class="col pe-5 me-5" type="text" name="leaveDeductions" id="leaveDeductions" onChange={(e)=>setOtherDeduction(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="TDS">TDS</label>
                        <input class="col pe-5 me-5" type="text" name="TDS" id="TDS" onChange={(e)=>setTDS(e.target.value)}/>
                    </div>
                    <div className="d-grid mt-4">
                        <input onClick={createPayslip} type="submit" value="Submit" className=" mx-2 px-5 btn btn-light innerShadow border-1 py-2 my-4 no-borderRadiusImportant" />
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
    }
