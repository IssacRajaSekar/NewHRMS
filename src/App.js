import './App.css';
// Essential
import React from 'react';
import { Routes, Route } from "react-router-dom";
// Login
import Login from './component/login/login';
// Forget Password
import ForgetPassword from './component/fogetPassword/forget_password';
// Navbars
import AdminNavbar from './component/Navabar/adminNavbar';
import EmpNavbar from './component/Navabar/empNavbar';
//Home
import Home from './component/home/home';

import HrAttendanceTablePage from './component/hrAttendanceTablePage';
import LeaveApplication from './component/leave_application';
import LeaveApplicationStatus from './component/leaveApplicationStatus';
import AllPendingLeaveApplicationList from './component/allPendingLeaveApplication';
import Organization from './component/organization';
import OrganizationDetails from './component/organizationDetails';
import AddEmployee from './component/employees/add_employee';
import EmployeesList from './component/employees/employees_list';
import EmployeeProfile from "./component/employees/employee_profile";
import EmpAttendance from "./component/empAttendance";
import AllEmpAttendance from "./component/allEmpAttendance";
import ProtectedRoute from './component/protected';
import DeleteOrganization from './component/deleteOrganization';
import UpdateOrganization from './component/updateOrganization';
import ViewEmployeeProfile from './component/employees/viewEmployeeProfile';
import DeleteEmpProfile from './component/employees/deleteEmpProfile';
import UpdateEmpProfile from './component/employees/updateEmpProfile';
import AllLeaveApplicationStatus from './component/allLeaveApplicationStatus';
import GeneratedPayslip from './component/payslipGeneration';
import UpdateLeavePerMonth from './component/updateLeavePerMonth';
import CreateDocumentWallet from './component/createdocumentWallet';
import DocumentWallet from './component/documentsWallet';
import UpdateDocumentWallet from './component/updateDocumentWallet';
import DeleteDocumenWallet from './component/deleteDocument';
import CreatePayslip from './component/createPayslip';
import AllPayslip from './component/allPayslip';
import SinglePayslip from './component/singlePayslip';
import UpdatePayslip from './component/updatePayslip';
import EmployeePayslip from './component/employeePayslip';
import EmpDocumentWallet from './component/empDocumentWallet';
function App() { 
 ProtectedRoute.isAuthenticated()
  return (
    <div className="App"> 
    <>
    {ProtectedRoute.isLogged === true ?
      <Routes>
        <Route path='/empDocumentWallet' element={<EmpDocumentWallet/>}/>
        <Route path='/hrAttendanceTablePage' element={<HrAttendanceTablePage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/employeePayslip' element={<EmployeePayslip/>}/>
        <Route path='/updatePayslip' element={<UpdatePayslip/>}/>
        <Route path='/singlePayslip' element={<SinglePayslip/>}/>
        <Route path='/allPayslip' element={<AllPayslip/>}/>
        <Route path='/createPayslip' element={<CreatePayslip/>}/>
        <Route path='/deleteDocument' element={<DeleteDocumenWallet/>}/>
        <Route path='/updateDocumentWallet' element={<UpdateDocumentWallet/>}/>
        <Route path='/documentsWallet' element={<DocumentWallet/>}/>
        <Route path='/createDocumentWallet' element={<CreateDocumentWallet/>}/>
        <Route path='/updateLeavePerMonth' element={<UpdateLeavePerMonth/>}/>
        <Route path='/payslipGeneration' element={<GeneratedPayslip/>}/>
        <Route path='/allLeaveApplicationStatus' element={<AllLeaveApplicationStatus/>}/>
        <Route path='/leaveApplicationStatus' element={<LeaveApplicationStatus/>}/>
        <Route path='/updateEmpProfile' element={<UpdateEmpProfile/>}/>
        <Route path='/deleteEmpProfile' element={<DeleteEmpProfile/>}/>
      {/* <Route path="/organization" element={ <Organization/> } /> */}
      <Route path='/viewEmployeeProfile' element={<ViewEmployeeProfile/>} />
        <Route path="/forget_password" element={<ForgetPassword/>}/>
        {ProtectedRoute.isAdmin===true ? <Route path="/adminNavbar" element={ <AdminNavbar/> } /> : <Route path='/empNavbar' element={<EmpNavbar/>}/>}
        {ProtectedRoute.isAdmin===true ? <Route path="/allPendingLeaveApplication" element={ <AllPendingLeaveApplicationList/> } />:<Route path="/leave_application" element={ <LeaveApplication/> } />} 
        {ProtectedRoute.isAdmin===true ? <Route path="/allPendingLeaveApplication" element={ <AllPendingLeaveApplicationList/> } />:<></>}
        {ProtectedRoute.isAdmin===true ? <Route path="/organization" element={ <Organization/> } /> : <Route path="/organizationDetails" element={ <OrganizationDetails/> } />}
        {ProtectedRoute.isAdmin===true ? <Route path='/add_employee' element={<AddEmployee/>} />:<></>}
        {ProtectedRoute.isAdmin===true ? <Route path='/employees_list' element={<EmployeesList/>} /> : <Route path='/employee_profile' element={<EmployeeProfile/>} />}
        {ProtectedRoute.isAdmin===true ? <Route path="/allEmpAttendance" element={<AllEmpAttendance/>} /> : <Route path="/empAttendance" element={<EmpAttendance/>} />}
        {ProtectedRoute.isAdmin===true ? <Route path="/organizationDetails" element={ <OrganizationDetails/> }/> :<Route path="/organizationDetails" element={ <OrganizationDetails/> }/> }
        {ProtectedRoute.isAdmin===true ? <Route path="/deleteOrganization" element={<DeleteOrganization/>}/>:<Route path='/empNavbar' element={<EmpNavbar/>}/>}
        {ProtectedRoute.isAdmin===true ? <Route path='/updateOrganization' element={<UpdateOrganization/>}/>:<Route path='/empNavbar' element={<EmpNavbar/>}/>}
      </Routes>
      : 
      <Routes>
        <Route exact path="/" element={ <Login/> }/>
        <Route path="/forget_password" element={<ForgetPassword/>}/>
        <Route path="/organization" element={ <Organization/> } />
      </Routes>
       }
</>
    </div>
  );
}

export default App;
