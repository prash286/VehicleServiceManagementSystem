import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userservice from "../services/userservice";
import errorMessage from "./JS/errorMessage";
const ForgotPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    userservice
      .sendLink(email)
      .then((response) => {
        alert(response.data);
        navigate("/");
      })
      .catch((err) => {
        errorMessage(err.response.data.message);
        // console.log(err);
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
        <table className="table table-bordereless text-end">
          <tbody>
            <tr>
              <td colSpan={2} align="center" valign="middle">
                <h4>
                  <strong>
                    <u>Verify Email</u>
                  </strong>
                </h4>
                <span style={{ color: "red" }}>
                  <h6>* All fields are mandetory</h6>
                  <h5 style={{ color: "red" }} id="err"></h5>
                </span>
              </td>
            </tr>
            <tr>
              <td valign="middle" align="right">
                <h6>Email: </h6>
              </td>
              <td align="left">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>

            <tr align="center">
              <td colSpan={2} valign="middle">
                <button className="btn btn-primary btn-md" onClick={sendEmail}>
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-primary btn-md"
                  onClick={() => navigate("/loginpage")}
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
export default ForgotPassword;
