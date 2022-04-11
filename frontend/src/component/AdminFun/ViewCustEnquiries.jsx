import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import adminservice from "../../services/adminservice";
import { useNavigate } from "react-router-dom";
const ViewCustEnquiries=()=>{
    const[enquiries,setEnquiries]=useState([]);
    const[enquiryResponse,setEnquiryResponse]=useState([]);
    const[bool,setBool]=useState([]);
    let navigate=useNavigate();
    let count=1;

    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        
        adminservice.getAllCustEnquiries().then((response)=>{
            console.log(response.data);
            if(response.data.length===0){
                setBool(false);
            }
            setEnquiries(response.data);
        });
    };
    const sendResponse=(eid)=>{
        adminservice.sendEnquiryResponse(enquiryResponse,eid)
        .then((response)=>{
            alert(response.data);
            init();
        }).catch((err)=>{
            console.log(err);
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
        {bool === false ? (
            <tbody>
                <tr>
                    <td>
                        <h2>No any new customer enquiry..</h2>
                    </td>
                </tr>
                <tr align="center">
                    <td colSpan={6}>
                        <button 
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() => navigate("/adminpage")}>Back</button>
                    </td>
                </tr>

            </tbody>
        ) : (<><thead>
            <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">custName</th>
                <th scope="col">Subject</th>
                <th scope="col">Description</th>
                <th scope="col">Response</th>
                <th scope="col">Send</th>

            </tr>
        </thead>
            <tbody>
                {enquiries.map((enquiry) => (
                    <tr key={enquiry.id}>
                        <td>{count++}</td>
                        <td>{enquiry.custName}</td>
                        <td>{enquiry.subject}</td>
                        <td>{enquiry.description}</td>
                       
                        {
                            (!enquiry.response?<td><input type="text"onChange={(e)=>{
                                setEnquiryResponse(e.target.value);
                            }}></input></td>:<></>)
                        }

                        <td><button 
                         type="button"
                         className="btn btn-success btn-md"
                        onClick={()=>{
                            sendResponse(enquiry.id);
                            }}>Send</button></td>

                    </tr>
                ))}
                <tr align="center">
                    <td colSpan={6}>
                        <button 
                         type="button"
                         className="btn btn-primary btn-md"
                        onClick={() => navigate("/adminpage")}>Back</button>
                    </td>
                </tr>
            </tbody>
        </>)}

    </table>
</div>
    );
}
export default ViewCustEnquiries;