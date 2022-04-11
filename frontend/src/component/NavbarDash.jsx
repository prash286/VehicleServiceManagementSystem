import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";

const NavbarDash = () => {
  const [sidebar, setSidebar] = useState(false);
  let user = JSON.parse(sessionStorage.getItem("user"));

  const showSidebar = () => setSidebar(!sidebar);
  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src="./images/servicelogo.jpg"
        className=" img-fluid ms-3 "
        width="50px"
        alt="service"
      />

      <div className="container-fluid">
        <a className="navbar-brand text-uppercase" href="#">
          Vehicle Service Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user ? (
              <>
                <li className="nav-item">
                  <a href="/" className="nav-link fw-bold ">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a href="about" className="nav-link fw-bold ">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact" className="nav-link fw-bold ">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="loginpage" className="nav-link fw-bold ">
                    Login
                  </a>
                </li>

                <li className="nav-item dropdown me-5">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    data-bs-toggle="dropdown"
                    role="button"
                    href="#"
                    id="navbarDropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Register
                  </a>
                  {/* <div className="dropdown-menu">
                    <Link to={`register/${"a"}`} className="dropdown-item">
                      Customer
                    </Link>
                    <Link to={`register/${"b"}`} className="dropdown-item">
                      Mechanic
                    </Link>
                    <Link to={`register/${"c"}`} className="dropdown-item">
                      Service Advisor
                    </Link>

                  </div> */}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to={`register/${"a"}`} className="dropdown-item">
                        Customer
                      </Link>
                    </li>
                    <li>
                      <Link to={`register/${"b"}`} className="dropdown-item">
                        Mechanic
                      </Link>
                    </li>
                    <li>
                      <Link to={`register/${"c"}`} className="dropdown-item">
                        Service Advisor
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                {/* sidebar */}
                <IconContext.Provider value={{ color: "#fff" }}>
                  <div className="side-navbar">
                    <li className="nav-item">
                      <a href="/profilepage" className="nav-link fw-bold ">
                        <FcIcons.FcBusinessman />
                        MyProfile
                      </a>
                    </li>
                  </div>
                  <div className="side-navbar">
                    <li className="nav-item">
                      <a
                        href="/"
                        className="nav-link fw-bold "
                        onClick={() => sessionStorage.clear()}
                      >
                        <FcIcons.FcLeft />
                        Logout
                      </a>
                    </li>
                  </div>
                  <div className="side-navbar">
                    <Link to="#" className="side-menu-bars">
                      <FaIcons.FaBars
                        className="me-5 text-secondary"
                        onClick={showSidebar}
                      />
                    </Link>
                  </div>
                  <nav
                    className={
                      sidebar ? "side-nav-menu active" : "side-nav-menu"
                    }
                  >
                    <ul className="side-nav-menu-items" onClick={showSidebar}>
                      <li className="side-navbar-toggle">
                        <Link to="#" className="side-menu-bars">
                          <AiIcons.AiOutlineClose />
                        </Link>
                      </li>
                      {user.userRole === "CUSTOMER" ? (
                        <>
                          <li className="side-nav-text">
                            <Link to="/enquiry">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Make a Enquiry</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/enquirystatus">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Enquiry Status</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/servicereq">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Make Service Request</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/requeststatus">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Service Request Status</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/vehiclestatus">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Vehicle Service Status</span>
                            </Link>
                          </li>
                        </>
                      ) : user.userRole === "ADMIN" ? (
                        <>
                          <li className="side-nav-text">
                            <Link to="/servicerecords">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Service Records</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/approveuser">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Approval</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/getcustenquiries">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>View Customer Enquiries</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/getcustrequest">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>View Customer Service Request</span>
                            </Link>
                          </li>
                        </>
                      ) : user.userRole === "MECHANIC" ? (
                        <>
                          <li className="side-nav-text">
                            <Link to="/assignedjobcard">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>View Assigned JobCard</span>
                            </Link>
                          </li>
                          {/* <li className="side-nav-text">
                            <Link to="/vehicleparts">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Availabe Vehicle Parts</span>
                            </Link>
                          </li> */}
                        </>
                      ) : user.userRole === "SERVICEADVISOR" ? (
                        <>
                          {" "}
                          <li className="side-nav-text">
                            <Link to="/addjobcard">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Add New JobCard</span>
                            </Link>
                          </li>
                          <li className="side-nav-text">
                            <Link to="/records">
                              <FcIcons.FcQuestions /> &nbsp;&nbsp;
                              <span>Records</span>
                            </Link>
                          </li>
                        </>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </nav>
                </IconContext.Provider>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarDash;
