import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import adminservice from "../../services/adminservice";
const CustomerDetails=()=>{
    const [userDetails,setUserDetails]=useState([]);
    let navigate=useNavigate();
    let count=1;
    useEffect(()=>{
    init();
    },[]);

    const init=()=>{
adminservice.getAllUsersDetails()
.then((response)=>{
  
           setUserDetails(response.data);
       
    
   });

    };
    return(
        <div
        style={{
          height: "88.8vh",
          background:
            "linear-gradient(to bottom right, #33ccff 29%, #ff33cc 100%)",
        }}
      >
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col" align="center">Sr.No</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">MobileNo</th>
            
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user) => 
            user.userRole==="CUSTOMER"?(
              <tr>
                <td align="center">{count++}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
             
              </tr>
            ):(
              <></>
            )
            )}
            <tr align="center">
              <td colSpan={4}>
                <button
                type="button"
                className="btn btn-primary btn-md"
                onClick={() => navigate("/adminpage")}>Back</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
export default CustomerDetails;