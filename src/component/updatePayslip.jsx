import axios from "axios";
import { useEffect, useState } from "react"; 
import { useLocation,useNavigate } from "react-router-dom";
import AdminNavbar from './Navabar/adminNavbar';
import EmpNavbar from './Navabar/empNavbar';


export default function UpdatePayslip(){
    const updatePayslip = useNavigate()
    const {state}=useLocation();
    console.log(state._id)
    console.log(state)
    const [identityNumber,setIdentityNumber] = useState();
    const [basicPay,setBasicPay] = useState();
    const [monthAndYear,setMonthAndYear] = useState();
    const [employeeShareOfPF, setEmployeeShareOfPF] = useState();
    const [HRA,setHRA] = useState();
    const [employeeShareOfESI,setEmployeeShareOfESI] = useState();
    const [medicalAllowance,setMedicalAllowance] = useState();
    const [employerShareOfPF,setEmployerShareOfPF] = useState();
    const [conveyanceAllowance,setConveyanceAllowance] = useState();
    const [employerShareOfESI,setEmployerShareOfESI] = useState();
    const [cityCompensatory,setCityCompensatory] =useState();
    const [allowance, setAllowance] = useState();
    const [leaveDeductions,setLeaveDeductions] = useState();
    const [otherAllowance,setOtherAllowance] = useState();
    const [TDS,setTDS] = useState();
    const UpdateEmployeeProfile = async (e) => {
        e.preventDefault();
        console.log(payslipDetails)
        const payslipDetails = {monthAndYear,identityNumber,basicPay,employeeShareOfPF,HRA,employeeShareOfESI,medicalAllowance,employerShareOfPF,conveyanceAllowance,employerShareOfESI,cityCompensatory,otherAllowance,allowance,leaveDeductions,TDS}
    console.log(payslipDetails)
        let updatePayslipDetails= await fetch('http://192.168.0.112:9022/HRMS/payslip/updatePaySlipDetails/'+state._id,{
            method: 'PUT',
            headers: {
              'Content-type': 'application/JSON'
            },
            body: JSON.stringify(payslipDetails)
        }).then((response)=>{
            console.log(response)
           updatePayslip('/allPayslip')
        }).catch((error)=>{
            console.log(error)
        })
     
    }
    return(
        <div>
           <div>
            <div className="Bg mb-5">
            {localStorage.getItem('role')=='admin'?<AdminNavbar/>:<EmpNavbar/>}
            <div class="container my-5 py-5 ">
                <form class="form-style text-align-center background" action="">
                    <div className="row">
                        <div className="col-4"></div>
                        <h3 className="col-6">Update Payslip</h3>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="id">Identity Number</label>
                        <label class="col pe-5 me-5" name="id" id="id">{state.EmployeeDetails.identityNumber}</label>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="basicPay">Basic Pay</label>
                        <input class="col pe-5 me-5" type="text" value={state.basicPay}  name="basicPay" id="basicPay"onChange={(e)=>setBasicPay(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="monthAndYear">Month and Year</label>
                        <input class="col pe-5 me-5" type="month" value={state.monthAndYear}  name="basicPay" id="basicPay"onChange={(e)=>setMonthAndYear(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employeeShareOfPF">Employee Share Of PF</label>
                        <input class="col pe-5 me-5" type="tel" value={state.employeeShareOfPF}  name="employeeShareOfPF" id="employeeShareOfPF"onChange={(e)=>setEmployeeShareOfPF(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for= "HRA">HRA</label>
                        <input class="col pe-5 me-5" type="text" value={state.HRA}  name= "HRA" id= "HRA" onChange={(e)=>setHRA(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employeeShareOfESI">Employee Share Of ESI</label>
                        <input class="col pe-5 me-5" type="text" value={state.employeeShareOfESI}  name="employeeShareOfESI" id="employeeShareOfESI" onChange={(e)=>setEmployeeShareOfESI(e.target.value)} />
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="medicalAllowance">Medical Allowance</label>
                        <input class="col pe-5 me-5" type="text" value={state.medicalAllowance}  name="medicalAllowance" id="medicalAllowance" onChange={(e)=>setMedicalAllowance(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employerShareOfPF">Employer Share Of PF</label>
                        <input class="col pe-5 me-5" type="text" value={state.employerShareOfPF}  name="employerShareOfPF" id="employerShareOfPF" onChange={(e)=>setEmployerShareOfPF(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="conveyanceAllowance">Conveyance Allowance</label>
                        <input class="col pe-5 me-5" type="text" value={state.conveyanceAllowance}  name="conveyanceAllowance" id="conveyanceAllowance" onChange={(e)=>setConveyanceAllowance(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="employerShareOfESI">Employer Share Of ESI</label>
                        <input class="col pe-5 me-5" type="text" value={state.employerShareOfESI}  name="employerShareOfESI" id="employerShareOfESI" onChange={(e)=>setEmployerShareOfESI(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="cityCompensatory">City Compensatory</label>
                        <input class="col pe-5 me-5" type="text" value={state.cityCompensatory}  name="cityCompensatory" id="cityCompensatory" onChange={(e)=>setCityCompensatory(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="otherAllowance">Other Allowance</label>
                        <input class="col pe-5 me-5" type="text" value={state.otherAllowance}  name="otherAllowance" id="otherAllowance" onChange={(e)=>setOtherAllowance(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="allowance">Allowance</label>
                        <input class="col pe-5 me-5" name="allowance" type="text" value={state.allowance}  id="allowance" onChange={(e)=>setAllowance(e.target.value)}></input>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="leaveDeductions">Leave Deductions</label>
                        <input class="col pe-5 me-5" type="text" value={state.leaveDeductions}  name="leaveDeductions" id="leaveDeductions" onChange={(e)=>setLeaveDeductions(e.target.value)}/>
                    </div>
                    <div class="row p-2 m-2">
                        <label class="col pe-5 me-5" for="TDS">TDS</label>
                        <input class="col pe-5 me-5" type="text" value={state.TDS} name="TDS" id="TDS" onChange={(e)=>setTDS(e.target.value)}/>
                    </div>
                    <div className="d-grid mt-4">
                        <input onClick={UpdateEmployeeProfile} type="submit" value="Submit" className=" mx-2 px-5 btn btn-light innerShadow border-1 py-2 my-4 no-borderRadiusImportant" />
                    </div>
                </form>
            </div>
        </div>
        </div> 
        </div>
    );
}