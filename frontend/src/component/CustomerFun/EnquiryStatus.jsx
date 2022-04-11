import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import customerservice from "../../services/customerservice";
const EnquiryStatus = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [id] = useState(user ? user.id : "");
  let navigate = useNavigate();
  let count = 1;
  const [enquiries, setEnquiries] = useState([]);

  const init = () => {
    customerservice
      .getEnquiryStatus(id)
      .then((response) => {
        // console.log(response.data);
        setEnquiries(response.data);
        // console.log(enquiries);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Description</th>
            <th scope="col">Response</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((customer) => (
            <tr key={customer.id}>
              <td align="center">{count++}</td>
              <td>{customer.custName}</td>
              <td>{customer.subject}</td>
              <td>{customer.description}</td>
              {customer.response ? (
                <td style={{ color: "blue" }}>{customer.response}</td>
              ) : (
                <td style={{ color: "red" }}>Wait for response...</td>
              )}
            </tr>
          ))}
          <tr align="center">
            <td colSpan={5}>
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

export default EnquiryStatus;
