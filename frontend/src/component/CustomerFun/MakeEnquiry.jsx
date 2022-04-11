import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import custservice from "../../services/customerservice";
import errorMessage from "../JS/errorMessage";
import validateEnquiryForm from "../JS/makeEnquiryValidate";
const CustomerEnquiry = (props) => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  let navigate = useNavigate();
  const [custName, setCustName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [response] = useState("");
  const [id, setId] = useState();

  const init = () => {
    if (user) {
      setCustName(user.userName);
      setId(user.id);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    validateEnquiryForm();
    let enquiry = { custName, subject, description, response };
    custservice
      .sendEnquiry(enquiry, id)
      .then((response) => {
        alert(response.data);
        navigate("/customerpage");
      })
      .catch((err) => {
        // errorMessage(" " + err.response.data.message + " ");
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
                    <u>Enquiry Form</u>
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
                  value={custName}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Subject:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  onChange={(e) => setSubject(e.target.value)}
                />
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errsub"
                ></p>
              </td>
            </tr>
            <tr>
              <td valign="middle">
                <h6>
                  <span style={{ color: "red" }}>*</span>Description:
                </h6>
              </td>
              <td>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <p
                  className="text-start"
                  style={{ color: "red" }}
                  id="errdesc"
                ></p>
              </td>
            </tr>
            <tr align="center">
              <td colSpan={2} valign="middle">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => sendData(e)}
                >
                  Send
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
export default CustomerEnquiry;
