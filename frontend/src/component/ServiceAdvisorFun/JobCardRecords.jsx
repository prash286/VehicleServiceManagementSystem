import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import advisorservice from "../../services/advisorservice";
import { useNavigate } from "react-router-dom";
const JobCardRecords = () => {
    const [jobCards, setJobCards] = useState([]);
    let count = 1;

    const navigate = useNavigate();
    useEffect(() => {
        init();
    }, []);

    const init = () => {
        advisorservice.getAllJobCards().
            then((response) => {
                setJobCards(response.data);
            }).catch((err) => {
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
                <thead>
                    <tr>
                        <th scope="col"align="center">Sr.No</th>
                        <th scope="col">Customer Name</th>
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
                    {jobCards.map((customer) => (
                        <tr key={customer.id}>
                            <td align="center">{count++}</td>
                            <td>{customer.custName}</td>
                            <td>{customer.custEmail}</td>
                            <td>{customer.mobileNo}</td>
                            <td>{customer.vehicleModel}</td>
                            <td>{customer.vehicleNo}</td>
                            <td>{customer.chasisNo}</td>
                            <td>{customer.serviceType}</td>
                            <td>{customer.suggestedWork}</td>
                            <td>{customer.mechanicAssigned}</td>
                            {!customer.isActive ? <td style={{ color: "blue" }}>pending.. </td> : <td style={{ color: "green" }}>Done</td>}
                        </tr>
                    ))}
                    <tr align="center">
                        <td colSpan={11}>
                            <button
                                type="button"
                                className="btn btn-primary btn-md"
                                onClick={() => navigate("/serviceadvisorpage")}
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
export default JobCardRecords;