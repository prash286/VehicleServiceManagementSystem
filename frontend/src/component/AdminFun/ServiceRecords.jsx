import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import adminservice from "../../services/adminservice";
import { useNavigate } from "react-router-dom";
const ServiceRecords = () => {
  const [jobcards, setJobcards] = useState([]);
  let navigate = useNavigate();
  let count = 1;
  useEffect(() => {
    init();
  }, []);
  const init = (() => {
    adminservice.getAllJobCards()
      .then((response) => {
        setJobcards(response.data);
      }).catch((err) => {
        console.log(err);
      });
  });
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
          {jobcards.map((jobcard) => (
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
              {jobcard.active == false ? (<td style={{ color: "red" }}>Pending... </td>) : (<td><button type="button"
                className="btn btn-success btn-md">Bill</button></td>)}
            </tr>
          ))}
          <tr align="center">
            <td colSpan={11}>
              <button type="button"
                className="btn btn-primary btn-md" onClick={() => navigate("/adminpage")}>Back</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}
export default ServiceRecords;