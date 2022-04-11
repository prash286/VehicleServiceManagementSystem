import React, { useEffect, useState } from "react";
import customerservice from "../../services/customerservice";
import { useNavigate } from "react-router-dom";
const ServiceReqStatus = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [id] = useState(user ? user.id : "");
  let navigate = useNavigate();
  let count = 1;
  const [serviceReq, setServiceReq] = useState([]);

  useEffect(() => {
    const init = () => {
      customerservice
        .getRequestStatus(id)
        .then((response) => {
          setServiceReq(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    init();
  }, [id]);
  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Customer Name</th>
            <th scope="col">MobileNo</th>
            <th scope="col">Vehicle Model</th>
            <th scope="col">Vehicle No</th>
            <th scope="col">Date for Service</th>
          </tr>
        </thead>
        <tbody>
          {serviceReq.map((customer) => (
            <tr key={customer.id}>
              <td align="center">{count++}</td>
              <td>{customer.custName}</td>
              <td>{customer.mobileNo}</td>
              <td>{customer.vehicleModel}</td>
              <td>{customer.vehicleNo}</td>
              {customer.date ? (
                <td style={{ color: "blue" }}>{customer.date}</td>
              ) : (
                <td style={{ color: "red" }}>Wait for response...</td>
              )}
            </tr>
          ))}
          <tr align="center">
            <td colSpan={6}>
              <button
                type="button"
                className="btn btn-primary btn-md"
                onClick={() => navigate("/customerpage")}
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
export default ServiceReqStatus;
