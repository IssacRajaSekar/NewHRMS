import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import sideImage from "../UI/Assets/LOGIN_&_HOMEPAGE/hrms_img.png";
import '../login/logincss.css';
import bee from '../UI/Assets/LOGIN_&_HOMEPAGE/bee.png';
import TextField from '@mui/material/TextField';


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate1 = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    if (email == "firebee@gmail.com" && password == "12345") {
    var role="admin";
      console.log(role)
    }
    else {
    var role="employee";
      console.log(role)
    }
    let loginData = { email, password, role }
    console.log(loginData)
    let logdata = await fetch('http://192.168.0.112:9022/HRMS/employee/adminAndEmployeeLogin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/JSON'
      },
      body: JSON.stringify(loginData)
    })
    let data = await logdata.json()
    console.log(data)
    const identityNumber = data.data.identityNumber;
    localStorage.setItem('identityNumber',identityNumber)
    const id = data.data._id;
    console.log(data)
    const token = data.token
    localStorage.setItem("token", token)
    localStorage.setItem('ID', id)
    console.log(id)
    localStorage.setItem('role', role)
    console.log('data',data)
    const  createdAt = data.data.createdAt;
    localStorage.setItem('createdAt',createdAt)
    
    if (token) {
      if (role == "admin") {
        navigate1("/home")
        localStorage.setItem('companyName', data.data.companyName)
        window.location.reload(false)
      }
      else if (role == "employee") {
        navigate1("/home")
        localStorage.setItem('userName', data.data.name)
        window.location.reload(false)
      }
    }
    else {
      navigate1("/")
      console.log("Login Failed")
    }
    // localStoragesetItem(role)
    // const role = localStorage.getItem('role')
   let datas = localStorage.getItem('data')
   console.log(datas)
  }

  const nav = () => {
    navigate1('/forget_password')
  }
  return (
    <>
    <img src={bee} alt="bee" width="100px" className="bee left"/>
    <p className="fw-bold">BEE HRMS</p>
<div className="container-fluid loginflex">
      <form className="row ani1 br">
        <div className="col-1"></div>
        <div className="loginBoxBackground border border-dark col-5 pt-5 " >
        <p className="fw-bold htext h1 mb-5">BEE HRMS</p>
        <div className='textFieldAlign'>
        <TextField
              margin="large"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
             </div>
             <div className='textFieldAlign'>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
           
        {/* <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="fw-bold br text-align-center border-2 py-2 inpPad mt-5 ms-4"placeholder="Email-ID"/> */}
       {/* <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" className="fw-bold br text-align-center border-2 py-2 inpPad my-5 ms-4" placeholder="Password"/>  */}
        <input type="submit" onClick={nav} value="Forget Password"  className="br py-2 my-3 ms-4 butPad fw-bolder" />
        <input onClick={login} type="submit" value="Submit" className="br ms-4 butPad px-5 py-2 my-4 fw-bolder" />
       </div>
      </form>
   
  <div className="row ani2 pt-4">
    <div className="col-1"></div>
    <img className=" col-10" src={sideImage} alt="" height='700' width="100%" />
    {/* <img src={personImage} alt="person" className="person ps-5 ms-5" width="70%" height={750} /> */}
    <div className="col-1"></div>
  </div>
</div>
</>
   
  );
 }
