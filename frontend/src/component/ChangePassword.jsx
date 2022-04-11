import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userservice from "../services/UserService";
const ChangePassword = () => {
  let navigate = useNavigate();
  let { email } = useParams();
  const [password, setPassword] = useState("");

  const changePass = (e) => {
    e.preventDefault();
    let obj = { email, password };
    userservice
      .submitNewPassword(obj)
      .then((response) => {
        alert(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function getPass() {
    var pass = document.getElementById("pass");
    var check = document.getElementById("ch");
    if (check.checked) {
      pass.setAttribute("type", "text");
    } else {
      pass.setAttribute("type", "password");
    }
  }
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
                    <u>Update Password</u>
                  </strong>
                </h4>
                <span style={{ color: "red" }}>
                  <h6>* All fields are mandetory</h6>
                </span>
              </td>
            </tr>
            <tr>
              <td valign="middle" align="right">
                <h6>New Password: </h6>
              </td>
              <td align="left">
                <input
                  type="password"
                  id="pass"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  onClick={() => getPass()}
                />
                show password
              </td>
            </tr>

            <tr align="center">
              <td colSpan={2} valign="middle">
                <button className="btn btn-success btn-md" onClick={changePass}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};
export default ChangePassword;
