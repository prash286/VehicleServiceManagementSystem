import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import adminservice from "../../services/adminservice";
const ViewCustServiceRequest = () => {
    const [serviceRequest, setServiceRequest] = useState([]);
    const [bool, setBool] = useState(true);
    const [date,setDate]=useState("");
    let navigate = useNavigate();
    let count=1;

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        adminservice.getAllCustServiceRequest().then((response) => {
            if (response.data.length === 0) {
                setBool(false);
            }
            setServiceRequest(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    const sendResponse=(rid)=>{
adminservice.sendServiceRequestResponse(date,rid)
.then((response)=>{
    alert(response.data);
    init();
}).catch((err)=>{
    console.log(err);
});
    };
    return (
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
                                <h2>No any new customer request..</h2>
                            </td>
                        </tr>
                        <tr align="center">
                            <td colSpan={7}>
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
                        <th scope="col">Customer Name</th>
                        <th scope="col">Mobile no.</th>
                        <th scope="col">Vehicle model</th>
                        <th scope="col">Vehicle No</th>
                        <th scope="col">Response</th>
                        <th scope="col">Send</th>

                    </tr>
                </thead>
                    <tbody>
                        {serviceRequest.map((request) => (
                            <tr key={request.id}>
                                <td align="center">{count++}</td>
                                <td>{request.custName}</td>
                                <td>{request.mobileNo}</td>
                                <td>{request.vehicleModel}</td>
                                <td>{request.vehicleNo}</td>

                                {
                                    (!request.date ? <td><input type="date" onChange={(e) => {
                                        setDate(e.target.value);
                                    }}></input></td> : <></>)
                                }

                                <td><button
                                 type="button"
                                 className="btn btn-success btn-md"
                                onClick={() => {
                                    sendResponse(request.id);
                                }}>Send</button></td>

                            </tr>
                        ))}
                        <tr  align="center">
                            <td colSpan={7}>
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
export default ViewCustServiceRequest;