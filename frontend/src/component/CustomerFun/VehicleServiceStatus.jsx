import React, { useEffect, useState } from "react";
import customerservice from "../../services/customerservice";
import { useNavigate } from "react-router-dom";
const VehicleServiceStatus = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [email] = useState(user ? user.email : "");
  let navigate = useNavigate();
  let count = 1;
  const [serviceStatus, setServiceStatus] = useState([]);

  useEffect(() => {
    const init = () => {
      // console.log(email);
      customerservice
        .getVehicleServiceStatus(email)
        .then((response) => {
          //   console.log(response);
          setServiceStatus(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    init();
  }, [email]);
  return (
    <div>
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
          {serviceStatus.map((jobcard) => (
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
                <td style={{ color: "blue" }}>Pending... </td>
              ) : (
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-md"
                    onClick={() => {
                      navigate(`/showbill/${jobcard.id}`);
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
export default VehicleServiceStatus;
