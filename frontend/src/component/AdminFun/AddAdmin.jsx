import React from "react";
import userservice from "../../services/userservice";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import validateRegistration from "../JS/validateReg";
const AddAdmin = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = (e) => {
    e.preventDefault();
    validateRegistration();
    const userRole = "ADMIN";
    let user = { userName, email, mobileNo, password, userRole };
    userservice
      .create(user)
      .then((response) => {
        alert(response.data);
        sessionStorage.clear();
        navigate("/");
      })
      .catch((error) => console.log("Client side error", error));
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
    <div className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <span style={{ color: "red" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * All
                      fields are mandetory
                    </span>
                    <br /> <br />
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="name">
                            <span style={{ color: "red" }}>*</span> Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control"
                            placeholder="Enter name"
                          />

                          <p id="errname" style={{ color: "red" }}></p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email">
                            <span style={{ color: "red" }}>*</span>Your Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter email"
                          />

                          <p id="erremail" style={{ color: "red" }}></p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="mob">
                            <span style={{ color: "red" }}>*</span> Mobile No
                          </label>
                          <input
                            type="text"
                            id="mob"
                            onChange={(e) => setMobileno(e.target.value)}
                            className="form-control"
                            placeholder="Enter mobile no"
                          />

                          <p id="errmob" style={{ color: "red" }}></p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="pass">
                            <span style={{ color: "red" }}>*</span> Password
                          </label>
                          <input
                            type="password"
                            id="pass"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter password"
                          />
                          <br />
                          <input
                            type="checkbox"
                            name="ch"
                            id="ch"
                            onClick={() => getPass()}
                          />
                          show password
                          <p id="errpass" style={{ color: "red" }}></p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          onClick={(e) => saveUser(e)}
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddAdmin;
