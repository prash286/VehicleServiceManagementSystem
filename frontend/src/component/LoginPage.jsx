import React from "react";
import { useState } from "react";
import userservice from "../services/UserService";
import errorMessage from "./JS/errorMessage";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateLogin = () => {
    const loginDetails = { email, password };

    userservice
      .signin(loginDetails)
      .then((response) => {
        switch (response.data.userRole) {
          case "ADMIN":
            sessionStorage.setItem("user", JSON.stringify(response.data));
            navigate("/adminpage");
            break;
          case "CUSTOMER":
            sessionStorage.setItem("user", JSON.stringify(response.data));
            navigate("/customerpage");
            break;
          case "MECHANIC":
            if (response.data.active === true) {
              sessionStorage.setItem("user", JSON.stringify(response.data));
              navigate("/mechanicpage");
            } else {
              navigate("/errorpage");
            }
            break;
          case "SERVICEADVISOR":
            if (response.data.active === true) {
              sessionStorage.setItem("user", JSON.stringify(response.data));
              navigate("/serviceadvisorpage");
            } else navigate("/errorpage");
            break;
        }
      })
      .catch((err) => {
        errorMessage(err.response.data.message);
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
    <div className="vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="./images/side.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Login</span>
                      </div>

                      <h6 style={{ color: "red" }} id="err"></h6>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="pass"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          name="ch"
                          id="ch"
                          onClick={() => getPass()}
                        />
                        show password
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e) => validateLogin(e)}
                        >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="/forgot">
                        Forgot password?
                      </a>
                    </form>
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
export default LoginPage;
