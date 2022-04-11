import React, { useEffect, useState } from "react";
import advisorservice from "../../services/advisorservice";
import { useNavigate } from "react-router-dom";
import errorMessage from "../JS/errorMessage";
import validateJobCard from "../JS/jobCardValidate";
const JobCard = () => {
  const [jobcard, setJobCard] = useState({
    custName: "",
    custEmail: "",
    mobileNo: "",
    date: "",
    vehicleModel: "",
    vehicleNo: "",
    chasisNo: "",
    serviceType: "PERIODIC_SERVICES",
    suggestedWork: "",
    mechanicId: 0,
    isActive: false,
  });
  const [userDetails, setUserDetails] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const init = () => {
      advisorservice
        .getMechanicNames()
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    init();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "custEmail") {
      advisorservice
        .checkCustomer(value)
        .then((response) => {
          if (response.data === false) {
            alert("User Need to Register First");
            navigate("/serviceadvisorpage");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setJobCard({ ...jobcard, [name]: value });
  };

  const handleSubmit = (e) => {
    // console.log(jobcard);
    e.preventDefault();
    validateJobCard();
    advisorservice
      .addJobCard(jobcard)
      .then((response) => {
        alert(response.data);
        navigate("/serviceadvisorpage");
      })
      .catch((err) => {
        // errorMessage(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  return (
    <form
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "65rem" }}
    >
      <div
        className="card"
        style={{
          width: "32rem",
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
                    <u>Job Card</u>
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
                  id="name"
                  className="form-control"
                  name="custName"
                  value={jobcard.custName}
                  onChange={handleChange}
                />
                <p className="text-start text-danger" id="errname"></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Email:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  name="custEmail"
                  defaultValue={jobcard.custEmail}
                  onBlur={handleChange}
                />
                <p className="text-start text-danger" id="erremail"></p>
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
                  value={jobcard.mobileNo}
                  onChange={handleChange}
                />
                <p className="text-start text-danger" id="errmob"></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Date:
                </h6>
              </td>
              <td>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  name="date"
                  value={jobcard.date}
                  onChange={handleChange}
                />
                <p className="text-start text-danger" id="errdate"></p>
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
                  id="model"
                  className="form-control"
                  name="vehicleModel"
                  value={jobcard.vehicleModel}
                  onChange={handleChange}
                />
                <p className="text-start text-danger" id="errmodel"></p>
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
                  id="vehno"
                  className="form-control"
                  name="vehicleNo"
                  value={jobcard.vehicleNo}
                  onChange={handleChange}
                />
                <p className="text-start text-danger" id="errvehno"></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Chasis No:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="chasisno"
                  className="form-control"
                  name="chasisNo"
                  value={jobcard.chasisNo}
                  onChange={handleChange}
                />
                <p className="text-start text-danger" id="errchasis"></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Service Type:
                </h6>
              </td>
              <td>
                <select
                  className="form-select"
                  id="service"
                  name="serviceType"
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="PERIODIC_SERVICES">Periodic Services</option>
                  <option value="DENTING_PAINTING">Denting & Painting</option>
                  <option value="BATTERIES">Batteries</option>
                  <option value="DETAILING_SERVICES">Detailing Services</option>
                  <option value="TYRES_WHEELCARE">Tyres & WheelCare</option>
                </select>
                <p className="text-start text-danger" id="errser"></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Assign Mechanic:
                </h6>
              </td>
              <td>
                <select
                  className="form-select"
                  id="mech"
                  name="mechanicId"
                  onChange={handleChange}
                >
                  <option value="">Select Mechanic</option>
                  {userDetails.map((mechanic) => (
                    <option key={mechanic.id} value={mechanic.id}>
                      {mechanic.userName}
                    </option>
                  ))}
                </select>
                <p className="text-start text-danger" id="errmech"></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Suggest Work:
                </h6>
              </td>
              <td>
                <textarea
                  className="form-control"
                  id="work"
                  name="suggestedWork"
                  value={jobcard.suggestedWork}
                  onChange={handleChange}
                  cols="30"
                  rows="4"
                />
                <p className="text-start text-danger" id="errwork"></p>
              </td>
            </tr>
            <tr align="center">
              <td colSpan={2} valign="middle">
                <button
                  type="button"
                  className="btn btn-success btn-md"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;
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
    </form>
  );
};
export default JobCard;
