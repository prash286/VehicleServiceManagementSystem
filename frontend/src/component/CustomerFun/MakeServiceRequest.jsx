import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import customerservice from "../../services/customerservice";
import errorMessage from "../JS/errorMessage";
import validateServiceReqForm from "../JS/serviceRequestValidate";
const ServiceRequset = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [id, setId] = useState();
  let navigate = useNavigate();
  const [serviceRequest, setServiceRequest] = useState({
    custName: "",
    mobileNo: "",
    vehicleModel: "",
    vehicleNo: "",
    date: "",
  });
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    init();
  }, []);
  const init = () => {
    if (user) {
      setId(user.id);
      setCustomerName(user.userName);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setServiceRequest({ ...serviceRequest, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateServiceReqForm();
    serviceRequest.custName = customerName;
    // console.log(serviceRequest.vehicleModel + "" + serviceRequest.vehicleNo);
    customerservice
      .sendServiceReq(serviceRequest, id)
      .then((response) => {
        alert(response.data);
        navigate("/customerpage");
      })
      .catch((err) => {
        // errorMessage(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  return (
    <form
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "40rem" }}
    >
      <div
        className="card"
        style={{
          width: "28rem",
          backgroundImage: "linear-gradient(315deg, #abe9cd 97%, #3eadcf 0%)",
        }}
      >
        {/* <h5 style={{ color: "red" }} id="err"></h5> */}
        <table className="table table-bordereless text-end">
          <tbody>
            <tr>
              <td colSpan={2} align="center" valign="middle">
                <h4>
                  <strong>
                    <u>Service Request Form</u>
                  </strong>
                </h4>
                <span style={{ color: "red" }}>
                  <h6>* All fields are mandetory</h6>
                </span>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>Customer Name:</h6>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={customerName}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>MobileNo:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="mobile"
                  className="form-control"
                  name="mobileNo"
                  value={serviceRequest.mobileNo}
                  onChange={handleChange}
                />
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errmob"
                ></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Vehicle Model:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="vehmodel"
                  className="form-control"
                  name="vehicleModel"
                  value={serviceRequest.vehicleModel}
                  onChange={handleChange}
                />
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errmod"
                ></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Vehicle No:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="vehNo"
                  className="form-control"
                  name="vehicleNo"
                  value={serviceRequest.vehicleNo}
                  onChange={handleChange}
                />

                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errno"
                ></p>
              </td>
            </tr>
            <tr align="center">
              <td colSpan={2} valign="middle">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate("/customerpage")}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};
export default ServiceRequset;
