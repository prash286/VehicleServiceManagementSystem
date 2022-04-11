import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminservice from "../../services/adminservice";
const ServiceRecords = () => {
  const [jobCards, setJobCards] = useState([]);
  let navigate = useNavigate();
  let count = 1;
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    adminservice
      .getAllJobCards()
      .then((response) => {
        setJobCards(response.data);
      })
      .catch((err) => {
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
            <th scope="col" align="center">
              Sr.No
            </th>
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
          {jobCards.map((jobcard) => (
            <tr key={jobcard.id}>
              <td align="center">{count++}</td>
              <td>{jobcard.custName}</td>
              <td>{jobcard.custEmail}</td>
              <td>{jobcard.mobileNo}</td>
              <td>{jobcard.vehicleModel}</td>
              <td>{jobcard.vehicleNo}</td>
              <td>{jobcard.chasisNo}</td>
              <td>{jobcard.serviceType}</td>
              <td>{jobcard.suggestedWork}</td>
              <td>{jobcard.mechanicAssigned}</td>
              {jobcard.active === false ? (
                <td style={{ color: "red" }}>Pending...</td>
              ) : (
                <td>
                  <button
                    className="btn btn-success btn-md"
                    onClick={() => {
                      navigate(`/getbill/${jobcard.id}`);
                    }}
                  >
                    Show Bill
                  </button>
                </td>
              )}
            </tr>
          ))}
          <tr align="center">
            <td colSpan={11}>
              <button
                className="btn btn-primary btn-md"
                onClick={() => navigate("/adminpage")}
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
export default ServiceRecords;
