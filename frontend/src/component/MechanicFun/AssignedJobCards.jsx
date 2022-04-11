import React from "react";
import { useState } from "react";
import mechanicService from "../../services/mechanicService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";//useNavigate-->to replace useHistory--it helps to go to the 

//specific URL,forward or backword pages

const AssignedJobCards=()=>{
let user=JSON.parse(sessionStorage.getItem("user"));
let count=1;
const navigate=useNavigate();
const [mechanicName]=useState(user?user.userName:"");
const [assignedJobCards,setAssignedJobCards]=useState([]);

useEffect(()=>{
    init();
},[]);

const init=()=>{
   //console.log(mechanicName);
    mechanicService.getAssignedJobCards(mechanicName)
    .then((response)=>{
       // console.log(response);
        setAssignedJobCards(response.data);
    }).catch((err)=>{console.log(err)});
    
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
                    <th scope="col">Sr.No</th>
                    <th scope="col">jobcard Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Vehcile Model</th>
                    <th scope="col">Vehicle No</th>
                    <th scope="col">Chasis No</th>
                    <th scope="col">Service Type</th>
                    <th scope="col">Work sugeest</th>
                    <th scope="col">Mechanic Name</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {assignedJobCards.map((jobcard) => (
                    <tr key={jobcard.id}>
                        <td>{count++}</td>
                        <td>{jobcard.custName}</td>
                        <td>{jobcard.custEmail}</td>
                        <td>{jobcard.mobileNo}</td>
                        <td>{jobcard.vehicleModel}</td>
                        <td>{jobcard.vehicleNo}</td>
                        <td>{jobcard.chasisNo}</td>
                        <td>{jobcard.serviceType}</td>
                        <td>{jobcard.suggestedWork}</td>
                        <td>{jobcard.mechanicAssigned}</td>
                        {jobcard.active==false ? <td style={{ color:"red" }}><button 
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={()=>{
                            sessionStorage.setItem("jobcard",JSON.stringify(jobcard));
                            navigate("/bill");
                        }}>pending</button></td> : <td style={{ color:"green" }}><b>Done</b></td>}
                    </tr>
                ))}
               <tr align="center">
                        <td colSpan={11}>
                            <button
                                type="button"
                                className="btn btn-primary btn-md"
                                onClick={() => navigate("/mechanicpage")}
                            >
                                Back
              </button>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
     );
  
};
export default  AssignedJobCards;