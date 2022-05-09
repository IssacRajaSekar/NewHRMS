
// export const AdminProtectedRoute = ({isAuth:r, component:Component, ...rest }) => {
    
//     return(
//         <Route {...rest} render={(props) => {
//             if (r === "admin"){ return <Component {...props} />;}
//             else {return (<Navigate to={{path:'/adminNavbar', state:{from:props.location}}}/>);
//         }}}/> );}

    const ProtectedRoute = {
    isAdmin:false,
    isEmp:false,
    isLogged : false,
    isAuthenticated()
   {
       const token=localStorage.getItem('token');
      const role=localStorage.getItem('role')
           if(token!==undefined && token !==null){
               this.isLogged =true;
               if (role === 'admin'){
                   this.isAdmin=true
               }
               else{this.isEmp=true}
           }
   }
   }
   export default ProtectedRoute